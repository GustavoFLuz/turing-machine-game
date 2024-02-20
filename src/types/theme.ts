import { theme } from '@/styles/theme';

type Theme = typeof theme;

type NonObjectKeys<T> = {
  [K in keyof T]: T[K] extends object ? never : K;
}[keyof T];

export type ColorType = NonObjectKeys<Theme['colors']>;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}