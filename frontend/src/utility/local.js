export const setLocalStorageItem = async (key, value) => {
  try {
    if (["object", "number"].includes(typeof value)) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.setItem(key, value);
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

export const getFromLocalStorage = async (key) => {
  let value = null;
  try {
    value = await localStorage.getItem(key);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
  return value;
};

export const removeFromLocal = async (key) => {
  try {
    await localStorage.removeItem(key);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

export const clearLocalStorage = async () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
