import 'styled-components';
import { defaultTheme } from '../styles/themas/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface defaultTheme extends ThemeType {}
}
