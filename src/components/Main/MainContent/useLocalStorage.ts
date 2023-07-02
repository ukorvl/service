/**
 * Credits to https://usehooks.com/useLocalStorage/.
 */

import { useCallback, useState } from 'react';
import { dequal as deepEqual } from 'dequal';

/**
 * Get localStorage item.
 *
 * @param ItemKey - Key.
 * @returns Item value.
 */
export const getItemFromLocalStorage = <T>(ItemKey: string): T | undefined => {
    try {
        const serialisedValue = localStorage.getItem(ItemKey);
        if (serialisedValue === null) {
            return undefined;
        }
        return JSON.parse(serialisedValue);
    } catch {
        return undefined;
    }
};

/**
 * Set localStorage item.
 *
 * @param ItemKey - Key.
 * @param ItemValue - Value.
 */
export const setItemIntoLocalStorage = <T>(ItemKey: string, ItemValue: T): void => {
    try {
        const serialisedValue = JSON.stringify(ItemValue);
        localStorage.setItem(ItemKey, serialisedValue);
    } catch {
        // Do nothing
    }
};

/**
 * Remove item from localStorage.
 *
 * @param ItemKey - Key.
 */
export const removeItemFromLocalStorage = (ItemKey: string): void => {
    try {
        localStorage.removeItem(ItemKey);
    } catch {
        // Do nothing
    }
};


/**
 * Hook to use localStorage in a useState() hook way.
 *
 * @param key LocalStorage key.
 * @param initialValue Inital value. Used when localStorage is empty.
 * @returns Persisited state.
 */
export const useLocalStorage = <T,>(
    key: string,
    initialValue: T,
): [T, (value: T) => void] => {
    const [storedValue, setStoredValue] = useState<T>(
        () => getItemFromLocalStorage(key) ?? initialValue,
    );

    const setValue = useCallback(
        (value: T) => {
            if (deepEqual(storedValue, value)) {
                return;
            }

            setStoredValue(value);
            setItemIntoLocalStorage(key, value);
        },
        [key, storedValue],
    );

    return [storedValue, setValue];
};
