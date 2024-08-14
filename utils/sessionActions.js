export const saveToSession = (key, value) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromSession = (key, initialValue = null) => {
  if (typeof window !== "undefined") {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  }
  return initialValue;
};
