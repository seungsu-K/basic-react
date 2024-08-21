import { node } from 'prop-types';
import { createContext, useContext, useMemo } from 'react';

import { primitives, semantics } from '@/routes/switch-theme/theme';

const themeContext = createContext();

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export function ThemeProvider({ children }) {
  const themeValue = useMemo(
    () => ({
      primitives,
      semantics,
    }),
    []
  );

  return (
    <themeContext.Provider value={themeValue}>{children}</themeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  return useContext(themeContext);
}
