// Helper function to truncate strings
export const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
   };