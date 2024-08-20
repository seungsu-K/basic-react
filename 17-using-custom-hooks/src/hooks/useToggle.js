import useStateWithCallback from './useStateWithCallback';

/** @type {(initialValue: boolean, callback: (nextState: any)=>void) => [isToggle, setIsToggle]} */
// function _useToggle(initialValue = false, callback) {
//   const [state, setState] = useState(initialValue);

//   useEffect(() => {
//     const nextState = state;

//     callback?.(nextState);

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [state]);

//   return [state, setState];
// }

function useToggle(initialValue = false, callback) {
  return useStateWithCallback(initialValue, callback);
}

export default useToggle;
