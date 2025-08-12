import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Tree, User, EnvironmentalMetrics, MaintenanceRecord, TreePhoto, AdoptionRequest } from '../types';

// Collection names
const COLLECTIONS = {
  TREES: 'trees',
  USERS: 'users',
  ADOPTION_REQUESTS: 'adoptionRequests',
  MAINTENANCE_RECORDS: 'maintenanceRecords',
  TREE_PHOTOS: 'treePhotos',
  ENVIRONMENTAL_METRICS: 'environmentalMetrics'
} as const;

// Helper function to convert Firestore Timestamp to Date
const convertTimestamp = (timestamp: Timestamp | null): Date | null => {
  return timestamp ? timestamp.toDate() : null;
};

// Helper function to convert Date to Firestore Timestamp
const convertToTimestamp = (date: Date | null): Timestamp | null => {
  return date ? Timestamp.fromDate(date) : null;
};

// Tree Services
export const treeService = {
  // Get all trees with real-time updates
  subscribeToTrees: (callback: (trees: Tree[]) => void) => {
    const q = query(collection(db, COLLECTIONS.TREES), orderBy('plantedDate', 'desc'));
    return onSnapshot(q, (snapshot) => {
      const trees: Tree[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        trees.push({
          id: doc.id,
          ...data,
          plantedDate: convertTimestamp(data.plantedDate),
          adoptedDate: convertTimestamp(data.adoptedDate),
          maintenanceHistory: data.maintenanceHistory || [],
          photos: data.photos || []
        } as Tree);
      });
      callback(trees);
    });
  },

  // Get a single tree with real-time updates
  subscribeToTree: (treeId: string, callback: (tree: Tree | null) => void) => {
    const treeRef = doc(db, COLLECTIONS.TREES, treeId);
    return onSnapshot(treeRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const tree: Tree = {
          id: doc.id,
          ...data,
          plantedDate: convertTimestamp(data.plantedDate),
          adoptedDate: convertTimestamp(data.adoptedDate),
          maintenanceHistory: data.maintenanceHistory || [],
          photos: data.photos || []
        } as Tree;
        callback(tree);
      } else {
        callback(null);
      }
    });
  },

  // Get available trees
  getAvailableTrees: async (): Promise<Tree[]> => {
    const q = query(
      collection(db, COLLECTIONS.TREES),
      where('status', '==', 'available'),
      orderBy('plantedDate', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      plantedDate: convertTimestamp(doc.data().plantedDate),
      adoptedDate: convertTimestamp(doc.data().adoptedDate),
      maintenanceHistory: doc.data().maintenanceHistory || [],
      photos: doc.data().photos || []
    } as Tree));
  },

  // Add a new tree
  addTree: async (treeData: Omit<Tree, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, COLLECTIONS.TREES), {
      ...treeData,
      plantedDate: convertToTimestamp(treeData.plantedDate),
      adoptedDate: convertToTimestamp(treeData.adoptedDate || null),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  },

  // Update a tree
  updateTree: async (treeId: string, updates: Partial<Tree>): Promise<void> => {
    const treeRef = doc(db, COLLECTIONS.TREES, treeId);
    const updateData: any = {
      ...updates,
      updatedAt: serverTimestamp()
    };
    
    // Handle adoptedDate conversion
    if (updates.adoptedDate !== undefined) {
      updateData.adoptedDate = convertToTimestamp(updates.adoptedDate);
    }
    
    await updateDoc(treeRef, updateData);
  },

  // Delete a tree
  deleteTree: async (treeId: string): Promise<void> => {
    const treeRef = doc(db, COLLECTIONS.TREES, treeId);
    await deleteDoc(treeRef);
  },

  // Adopt a tree
  adoptTree: async (treeId: string, userId: string): Promise<void> => {
    const treeRef = doc(db, COLLECTIONS.TREES, treeId);
    await updateDoc(treeRef, {
      status: 'adopted',
      adoptedBy: userId,
      adoptedDate: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  }
};

// User Services
export const userService = {
  // Get user with real-time updates
  subscribeToUser: (userId: string, callback: (user: User | null) => void) => {
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    return onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const user: User = {
          id: doc.id,
          ...data,
          joinDate: convertTimestamp(data.joinDate)
        } as User;
        callback(user);
      } else {
        callback(null);
      }
    });
  },

  // Get user's adopted trees
  getUserAdoptedTrees: async (userId: string): Promise<Tree[]> => {
    const q = query(
      collection(db, COLLECTIONS.TREES),
      where('adoptedBy', '==', userId),
      orderBy('adoptedDate', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      plantedDate: convertTimestamp(doc.data().plantedDate),
      adoptedDate: convertTimestamp(doc.data().adoptedDate),
      maintenanceHistory: doc.data().maintenanceHistory || [],
      photos: doc.data().photos || []
    } as Tree));
  },

  // Add a new user
  addUser: async (userData: Omit<User, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, COLLECTIONS.USERS), {
      ...userData,
      joinDate: convertToTimestamp(userData.joinDate),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  },

  // Update user
  updateUser: async (userId: string, updates: Partial<User>): Promise<void> => {
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
  }
};

// Maintenance Record Services
export const maintenanceService = {
  // Add maintenance record to a tree
  addMaintenanceRecord: async (treeId: string, record: Omit<MaintenanceRecord, 'id'>): Promise<string> => {
    const recordData = {
      ...record,
      date: convertToTimestamp(record.date),
      createdAt: serverTimestamp()
    };
    
    const docRef = await addDoc(collection(db, COLLECTIONS.MAINTENANCE_RECORDS), {
      ...recordData,
      treeId
    });

    // Update tree's maintenance history
    const treeRef = doc(db, COLLECTIONS.TREES, treeId);
    const treeDoc = await getDoc(treeRef);
    if (treeDoc.exists()) {
      const currentHistory = treeDoc.data().maintenanceHistory || [];
      await updateDoc(treeRef, {
        maintenanceHistory: [...currentHistory, { id: docRef.id, ...record }]
      });
    }

    return docRef.id;
  },

  // Get maintenance records for a tree
  getTreeMaintenanceRecords: async (treeId: string): Promise<MaintenanceRecord[]> => {
    const q = query(
      collection(db, COLLECTIONS.MAINTENANCE_RECORDS),
      where('treeId', '==', treeId),
      orderBy('date', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: convertTimestamp(doc.data().date)
    } as MaintenanceRecord));
  }
};

// Adoption Request Services
export const adoptionService = {
  // Submit adoption request
  submitAdoptionRequest: async (request: Omit<AdoptionRequest, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, COLLECTIONS.ADOPTION_REQUESTS), {
      ...request,
      requestDate: convertToTimestamp(request.requestDate),
      createdAt: serverTimestamp()
    });
    return docRef.id;
  },

  // Get user's adoption requests
  getUserAdoptionRequests: async (userId: string): Promise<AdoptionRequest[]> => {
    const q = query(
      collection(db, COLLECTIONS.ADOPTION_REQUESTS),
      where('userId', '==', userId),
      orderBy('requestDate', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      requestDate: convertTimestamp(doc.data().requestDate)
    } as AdoptionRequest));
  },

  // Update adoption request status
  updateAdoptionRequestStatus: async (requestId: string, status: AdoptionRequest['status']): Promise<void> => {
    const requestRef = doc(db, COLLECTIONS.ADOPTION_REQUESTS, requestId);
    await updateDoc(requestRef, {
      status,
      updatedAt: serverTimestamp()
    });
  }
};

// Environmental Metrics Services
export const metricsService = {
  // Get environmental metrics with real-time updates
  subscribeToMetrics: (callback: (metrics: EnvironmentalMetrics) => void) => {
    const metricsRef = doc(db, COLLECTIONS.ENVIRONMENTAL_METRICS, 'global');
    return onSnapshot(metricsRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        callback(data as EnvironmentalMetrics);
      }
    });
  },

  // Update environmental metrics
  updateMetrics: async (metrics: Partial<EnvironmentalMetrics>): Promise<void> => {
    const metricsRef = doc(db, COLLECTIONS.ENVIRONMENTAL_METRICS, 'global');
    await updateDoc(metricsRef, {
      ...metrics,
      updatedAt: serverTimestamp()
    });
  }
};

// Photo Services
export const photoService = {
  // Add photo to a tree
  addTreePhoto: async (treeId: string, photo: Omit<TreePhoto, 'id'>): Promise<string> => {
    const photoData = {
      ...photo,
      date: convertToTimestamp(photo.date),
      createdAt: serverTimestamp()
    };
    
    const docRef = await addDoc(collection(db, COLLECTIONS.TREE_PHOTOS), {
      ...photoData,
      treeId
    });

    // Update tree's photos array
    const treeRef = doc(db, COLLECTIONS.TREES, treeId);
    const treeDoc = await getDoc(treeRef);
    if (treeDoc.exists()) {
      const currentPhotos = treeDoc.data().photos || [];
      await updateDoc(treeRef, {
        photos: [...currentPhotos, { id: docRef.id, ...photo }]
      });
    }

    return docRef.id;
  },

  // Get photos for a tree
  getTreePhotos: async (treeId: string): Promise<TreePhoto[]> => {
    const q = query(
      collection(db, COLLECTIONS.TREE_PHOTOS),
      where('treeId', '==', treeId),
      orderBy('date', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: convertTimestamp(doc.data().date)
    } as TreePhoto));
  }
};
