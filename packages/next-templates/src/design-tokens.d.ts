import 'react';

declare module 'react' {
  export interface CSSProperties {
    [key: `--${'example' | 'denhaag' | 'frameless' | 'utrecht'}-${string}`]: string | number | undefined;
  }
}
