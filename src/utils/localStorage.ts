export const saveToLocalStorage = (
    key: string,
    value: string | number | boolean
) => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (e) {
        console.warn("Error saving to local storage", e);
    }
};

export const loadFromLocalStorage = (key: string) => {
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) return undefined;
        return JSON.parse(serializedValue);
    } catch (e) {
        console.warn("Error loading from local storage", e);
        return undefined;
    }
};
