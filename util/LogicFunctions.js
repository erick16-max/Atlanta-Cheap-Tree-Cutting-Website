// Helper function to truncate strings
export const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
   };


// data is array, not null and not undefined
export const isArray = (data) => {
    return data !== undefined && data !== null && (Array.isArray(data) ? data.length > 0 : true)
}

export const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });