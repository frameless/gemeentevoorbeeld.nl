import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface ContactFormSessionData {
  message?: string;
  name?: string;
  street?: string;
  houseNumber?: string;
  houseNumberSuffix?: string;
  postalCode?: string;
  homeTown?: string;
  email?: string;
  phone?: string;
  code?: string;
}

export const FORM_SESSION_KEY = 'wmebv';

const getSessionStorageJSON = (key: string): any => {
  try {
    const json = sessionStorage.getItem(key);
    if (typeof json === 'string') {
      return JSON.parse(json);
    }
  } catch (e) {
    return null;
  }
};
const setSessionStorageJSON = (key: string, value: any) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

const reomveSessionStorage = (key: string) => {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {}
};

const isObject = (arg: any) => typeof arg === 'object' && !!arg;

export const useSessionState = <T>(
  key: string,
  initialValue: T,
): [T, (prevState: T) => T, (prevState: T) => T, () => void] => {
  const arr = useState<T>(() => {
    const stored = getSessionStorageJSON(key);
    console.log(key, stored, initialValue);
    const patched =
      isObject(initialValue) && isObject(stored) ? { ...initialValue, ...stored } : stored || initialValue;
    return patched;
  });

  const [storedData, setStoredData] = arr;

  const persistData: SetStateAction<T> = (value: T): T => {
    setStoredData(value);
    if (typeof value === 'undefined') {
      reomveSessionStorage(key);
    } else {
      setSessionStorageJSON(key, value);
    }
    return value;
  };

  const patchData: SetStateAction<T> = (value: T): T => {
    const stored = getSessionStorageJSON(key);

    const patched = isObject(value) && isObject(stored) ? { ...stored, ...value } : value;

    setSessionStorageJSON(key, patched);

    return patched;
  };

  const removeData = () => reomveSessionStorage(key);

  return [storedData, persistData, patchData, removeData];
};
