// save value in the local storage
export const saveInLocalStorage = (key: string, value: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  } else {
    localStorage.setItem(key, value);
  }
};

// get value from the local storage
export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  } else {
    return localStorage.getItem(key);
  }
};

// remove value from local storage
export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  } else {
    localStorage.removeItem(key);
  }
};
