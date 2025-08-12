// Type definitions for GreenAdopt

export interface Tree {
  id: string;
  name: string;
  species: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
    city: string;
    state: string;
  };
  plantedDate: Date;
  height: number; // in meters
  diameter: number; // in cm
  health: 'excellent' | 'good' | 'fair' | 'poor';
  status: 'available' | 'adopted' | 'maintenance';
  adoptedBy?: string;
  adoptedDate?: Date;
  description: string;
  imageUrl: string;
  environmentalImpact: {
    co2Absorbed: number; // in kg
    oxygenProduced: number; // in kg
    waterConserved: number; // in liters
  };
  maintenanceHistory: MaintenanceRecord[];
  photos: TreePhoto[];
}

export interface MaintenanceRecord {
  id: string;
  date: Date;
  type: 'watering' | 'pruning' | 'fertilizing' | 'pest_control' | 'general';
  description: string;
  performedBy: string;
  notes?: string;
}

export interface TreePhoto {
  id: string;
  url: string;
  date: Date;
  description: string;
  uploadedBy: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  adoptedTrees: string[]; // Tree IDs
  joinDate: Date;
  totalContribution: number; // Environmental impact contribution
  profileImage?: string;
}

export interface AdoptionRequest {
  id: string;
  treeId: string;
  userId: string;
  requestDate: Date;
  status: 'pending' | 'approved' | 'rejected';
  message?: string;
}

export interface EnvironmentalMetrics {
  totalTrees: number;
  totalCO2Absorbed: number;
  totalOxygenProduced: number;
  totalWaterConserved: number;
  totalAdoptions: number;
  activeTreeParents: number;
}
