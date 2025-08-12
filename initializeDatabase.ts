// scripts/initializeDatabase.ts
import { treeService, userService, metricsService } from './src/services/firestoreService';
import { mockTrees, mockUsers, mockEnvironmentalMetrics } from './src/data/mockData';

export const initializeDatabase = async () => {
  try {
    // Add trees
    for (const tree of mockTrees) {
      const { id, ...treeData } = tree;
      await treeService.addTree(treeData);
      console.log(`Added tree: ${tree.name}`);
    }

    // Add users
    for (const user of mockUsers) {
      const { id, ...userData } = user;
      await userService.addUser(userData);
      console.log(`Added user: ${user.name}`);
    }

    // Add environmental metrics
    await metricsService.updateMetrics(mockEnvironmentalMetrics);
    console.log('Added environmental metrics');

    console.log('Database initialization complete!');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};