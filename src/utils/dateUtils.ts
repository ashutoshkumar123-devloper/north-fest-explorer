
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

export const getShortDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(date);
};

export const isUpcoming = (dateString: string): boolean => {
  const festDate = new Date(dateString);
  const today = new Date();
  return festDate >= today;
};

export const getDaysRemaining = (dateString: string): number => {
  const festDate = new Date(dateString);
  const today = new Date();
  
  // Set both dates to midnight for accurate day calculation
  festDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  
  const diffTime = festDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
