import { array, node, object, oneOfType } from 'prop-types';
import { createContext, useContext } from 'react';

const pageContext = createContext();

PageProvider.propTypes = {
  value: oneOfType([object, array]).isRequired,
  children: node.isRequired,
};

export function PageProvider({ value, children }) {
  return <pageContext.Provider value={value}>{children}</pageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  return useContext(pageContext);
}
