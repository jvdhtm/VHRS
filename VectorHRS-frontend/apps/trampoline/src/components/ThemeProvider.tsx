import { ReactElement } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


type ThemeProviderProps = { children: ReactElement };

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return < >{children}</>;
};

export default ThemeProvider;
