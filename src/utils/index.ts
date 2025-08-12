// Utility functions for GreenAdopt
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const calculateAge = (plantedDate: Date): number => {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - plantedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const generateTreeId = (): string => {
  return 'TREE_' + Math.random().toString(36).substr(2, 9).toUpperCase();
};
