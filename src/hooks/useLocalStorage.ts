import { useMemo } from 'react';

/* eslint-disable no-console */
class Storage {
  private readonly key: string;

  constructor(key: string) {
    this.key = key;
  }

  public get<T>(key: string, defaultValue: T): T {
    const data = localStorage.getItem(this.key);
    if (data) {
      const result = JSON.parse(data) || defaultValue;
      return result as T;
    }
    return defaultValue;
  }

  public set<T>(key: string, value: T): void {
    try {
      const parsed = JSON.stringify(value);
      localStorage.setItem(this.key, parsed);
    } catch ({ message }) {
      console.error('error when inserting content in storage', message);
    }
  }

  public remove(): void {
    localStorage.removeItem(this.key);
  }
}

const PREFIX = '@HIPlatform';

export const useLocalStorage = (key: string): Storage => {
  return useMemo(() => new Storage(`${PREFIX}:${key}`), [key]);
};
