import { mmkv } from "./mmkv";

export const MMKVPersistence = {
  setItem: (key: string, value: string) => {
    mmkv.set(key, value);
    return Promise.resolve();
  },

  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return Promise.resolve(value ?? null);
  },

  removeItem: (key: string) => {
    mmkv.delete(key);
    return Promise.resolve();
  },
};
