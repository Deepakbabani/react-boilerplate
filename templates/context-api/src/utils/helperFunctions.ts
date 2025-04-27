// Function to format dates
export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

// Function to capitalize the first letter of a string
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to debounce a function (useful for search inputs or API calls)
export const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};
