import { Tree, User, EnvironmentalMetrics } from '../types';

export const mockTrees: Tree[] = [
  {
    id: 'TREE_001',
    name: 'Oakley',
    species: 'Quercus robur',
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      address: '123 Central Park West',
      city: 'New York',
      state: 'NY'
    },
    plantedDate: new Date('2023-03-15'),
    height: 3.2,
    diameter: 25,
    health: 'excellent',
    status: 'available',
    description: 'A majestic English Oak tree planted in Central Park. This tree is known for its broad canopy and provides excellent shade during summer months.',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop',
    environmentalImpact: {
      co2Absorbed: 45.2,
      oxygenProduced: 32.8,
      waterConserved: 1200
    },
    maintenanceHistory: [
      {
        id: 'MAINT_001',
        date: new Date('2024-01-15'),
        type: 'watering',
        description: 'Regular watering session',
        performedBy: 'Park Maintenance Team',
        notes: 'Tree showing healthy growth'
      }
    ],
    photos: [
      {
        id: 'PHOTO_001',
        url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop',
        date: new Date('2024-01-15'),
        description: 'Oakley in full bloom',
        uploadedBy: 'Park Ranger'
      }
    ]
  },
  {
    id: 'TREE_002',
    name: 'Maple',
    species: 'Acer saccharum',
    location: {
      latitude: 40.7589,
      longitude: -73.9851,
      address: '456 Times Square',
      city: 'New York',
      state: 'NY'
    },
    plantedDate: new Date('2023-05-20'),
    height: 2.8,
    diameter: 20,
    health: 'good',
    status: 'adopted',
    adoptedBy: 'user_001',
    adoptedDate: new Date('2024-01-10'),
    description: 'A beautiful Sugar Maple tree that will provide stunning fall colors. This tree is perfect for urban environments.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    environmentalImpact: {
      co2Absorbed: 38.5,
      oxygenProduced: 28.1,
      waterConserved: 950
    },
    maintenanceHistory: [
      {
        id: 'MAINT_002',
        date: new Date('2024-01-20'),
        type: 'pruning',
        description: 'Seasonal pruning for healthy growth',
        performedBy: 'Tree Care Specialist',
        notes: 'Removed dead branches, tree responding well'
      }
    ],
    photos: [
      {
        id: 'PHOTO_002',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        date: new Date('2024-01-20'),
        description: 'Maple after pruning',
        uploadedBy: 'Tree Care Specialist'
      }
    ]
  },
  {
    id: 'TREE_003',
    name: 'Pine',
    species: 'Pinus strobus',
    location: {
      latitude: 40.7505,
      longitude: -73.9934,
      address: '789 Madison Avenue',
      city: 'New York',
      state: 'NY'
    },
    plantedDate: new Date('2023-07-10'),
    height: 4.1,
    diameter: 30,
    health: 'excellent',
    status: 'available',
    description: 'A tall Eastern White Pine that provides year-round greenery and excellent wind protection.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    environmentalImpact: {
      co2Absorbed: 52.3,
      oxygenProduced: 38.9,
      waterConserved: 1400
    },
    maintenanceHistory: [],
    photos: [
      {
        id: 'PHOTO_003',
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
        date: new Date('2024-01-25'),
        description: 'Pine tree in winter',
        uploadedBy: 'Urban Forester'
      }
    ]
  },
  {
    id: 'TREE_004',
    name: 'Cherry',
    species: 'Prunus serrulata',
    location: {
      latitude: 40.7484,
      longitude: -73.9857,
      address: '321 5th Avenue',
      city: 'New York',
      state: 'NY'
    },
    plantedDate: new Date('2023-04-05'),
    height: 2.5,
    diameter: 18,
    health: 'good',
    status: 'maintenance',
    description: 'A beautiful Japanese Cherry tree that will bloom with stunning pink flowers in spring.',
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
    environmentalImpact: {
      co2Absorbed: 28.7,
      oxygenProduced: 21.3,
      waterConserved: 750
    },
    maintenanceHistory: [
      {
        id: 'MAINT_003',
        date: new Date('2024-01-30'),
        type: 'fertilizing',
        description: 'Spring fertilization',
        performedBy: 'Garden Care Team',
        notes: 'Applied organic fertilizer for healthy spring growth'
      }
    ],
    photos: [
      {
        id: 'PHOTO_004',
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
        date: new Date('2024-01-30'),
        description: 'Cherry tree buds forming',
        uploadedBy: 'Garden Care Team'
      }
    ]
  }
];

export const mockUsers: User[] = [
  {
    id: 'user_001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    adoptedTrees: ['TREE_002'],
    joinDate: new Date('2024-01-01'),
    totalContribution: 38.5,
    profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'user_002',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    adoptedTrees: [],
    joinDate: new Date('2024-01-15'),
    totalContribution: 0,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  }
];

export const mockEnvironmentalMetrics: EnvironmentalMetrics = {
  totalTrees: 156,
  totalCO2Absorbed: 2847.6,
  totalOxygenProduced: 2103.2,
  totalWaterConserved: 75600,
  totalAdoptions: 89,
  activeTreeParents: 67
};
