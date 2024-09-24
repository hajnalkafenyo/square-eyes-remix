import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export function useLocalStorage<T extends any>(key: string, initialValue: T) {
  const [internalData, setInternalData] = useState<T>(initialValue);

  const setData = (data: T) => {
    saveItemsToLocalStorage(key, data);
  };

  const data = internalData;

  /**
   * Get the cart items from the local storage
   * @returns Cart items
   */
  const getItemsFromLocalStorage = (key: string): T => {
    const content = window.localStorage.getItem(key);
    if (content === null) {
      return initialValue;
    }
    const items = JSON.parse(content);
    return items;
  };

  /**
   * Stores the data to the local storage
   * @param items the data to save
   */
  const saveItemsToLocalStorage = (key: string, items: T) => {
    const content = JSON.stringify(items);
    window.localStorage.setItem(key, content);
    handleStorage();
  };

  const syncInternalStateToLocalStorage = () => {
    const dataInLocalStorage = getItemsFromLocalStorage(key);
    setInternalData(dataInLocalStorage);
    console.log("sync");
  };

  // Adds the data from the local storage to the internal state
  useLayoutEffect(() => {
    syncInternalStateToLocalStorage();
  }, [setInternalData]);

  const handleStorage = useCallback(() => {
    console.log("synced");
    syncInternalStateToLocalStorage();
  }, [syncInternalStateToLocalStorage]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      addEventListener("storage", handleStorage);
      console.log(key, "added event listene r");
    }
    return () => {
      removeEventListener("storage", handleStorage);
      console.log(key, "removed event listener");
    };
  }, [handleStorage, key, syncInternalStateToLocalStorage]);

  return {
    setData,
    data,
  };
}
