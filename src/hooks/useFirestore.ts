import { useState, useEffect } from 'react';
import { 
  treeService, 
  userService, 
  metricsService, 
  maintenanceService, 
  adoptionService, 
  photoService 
} from '../services/firestoreService';
import { Tree, User, EnvironmentalMetrics, MaintenanceRecord, AdoptionRequest, TreePhoto } from '../types';

// Hook for real-time trees data
export const useTrees = () => {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = treeService.subscribeToTrees((trees) => {
      setTrees(trees);
      setLoading(false);
      setError(null);
    });

    return () => unsubscribe();
  }, []);

  return { trees, loading, error };
};

// Hook for real-time single tree data
export const useTree = (treeId: string) => {
  const [tree, setTree] = useState<Tree | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!treeId) {
      setTree(null);
      setLoading(false);
      return;
    }

    const unsubscribe = treeService.subscribeToTree(treeId, (tree) => {
      setTree(tree);
      setLoading(false);
      setError(null);
    });

    return () => unsubscribe();
  }, [treeId]);

  return { tree, loading, error };
};

// Hook for real-time user data
export const useUser = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setUser(null);
      setLoading(false);
      return;
    }

    const unsubscribe = userService.subscribeToUser(userId, (user) => {
      setUser(user);
      setLoading(false);
      setError(null);
    });

    return () => unsubscribe();
  }, [userId]);

  return { user, loading, error };
};

// Hook for real-time environmental metrics
export const useEnvironmentalMetrics = () => {
  const [metrics, setMetrics] = useState<EnvironmentalMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = metricsService.subscribeToMetrics((metrics) => {
      setMetrics(metrics);
      setLoading(false);
      setError(null);
    });

    return () => unsubscribe();
  }, []);

  return { metrics, loading, error };
};

// Hook for available trees
export const useAvailableTrees = () => {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailableTrees = async () => {
      try {
        setLoading(true);
        const availableTrees = await treeService.getAvailableTrees();
        setTrees(availableTrees);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch available trees');
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableTrees();
  }, []);

  return { trees, loading, error };
};

// Hook for user's adopted trees
export const useUserAdoptedTrees = (userId: string) => {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setTrees([]);
      setLoading(false);
      return;
    }

    const fetchAdoptedTrees = async () => {
      try {
        setLoading(true);
        const adoptedTrees = await userService.getUserAdoptedTrees(userId);
        setTrees(adoptedTrees);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch adopted trees');
      } finally {
        setLoading(false);
      }
    };

    fetchAdoptedTrees();
  }, [userId]);

  return { trees, loading, error };
};

// Hook for tree maintenance records
export const useTreeMaintenanceRecords = (treeId: string) => {
  const [records, setRecords] = useState<MaintenanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!treeId) {
      setRecords([]);
      setLoading(false);
      return;
    }

    const fetchMaintenanceRecords = async () => {
      try {
        setLoading(true);
        const maintenanceRecords = await maintenanceService.getTreeMaintenanceRecords(treeId);
        setRecords(maintenanceRecords);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch maintenance records');
      } finally {
        setLoading(false);
      }
    };

    fetchMaintenanceRecords();
  }, [treeId]);

  return { records, loading, error };
};

// Hook for user's adoption requests
export const useUserAdoptionRequests = (userId: string) => {
  const [requests, setRequests] = useState<AdoptionRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setRequests([]);
      setLoading(false);
      return;
    }

    const fetchAdoptionRequests = async () => {
      try {
        setLoading(true);
        const adoptionRequests = await adoptionService.getUserAdoptionRequests(userId);
        setRequests(adoptionRequests);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch adoption requests');
      } finally {
        setLoading(false);
      }
    };

    fetchAdoptionRequests();
  }, [userId]);

  return { requests, loading, error };
};

// Hook for tree photos
export const useTreePhotos = (treeId: string) => {
  const [photos, setPhotos] = useState<TreePhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!treeId) {
      setPhotos([]);
      setLoading(false);
      return;
    }

    const fetchTreePhotos = async () => {
      try {
        setLoading(true);
        const treePhotos = await photoService.getTreePhotos(treeId);
        setPhotos(treePhotos);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tree photos');
      } finally {
        setLoading(false);
      }
    };

    fetchTreePhotos();
  }, [treeId]);

  return { photos, loading, error };
};
