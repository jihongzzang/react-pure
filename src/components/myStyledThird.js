import { useRef, useEffect } from 'react';

import myDomElements from './domElements';

const myStyledThird =
  Component =>
  (strs, ...exprs) =>
  props => {
    const elementRef = useRef(null);

    useEffect(() => {
      if (elementRef) {
        const style = exprs.reduce((result, expr, index) => {
          const isFunc = typeof expr === 'function';
          const value = isFunc ? expr(props) : expr;

          return result + value + strs[index + 1];
        }, strs[0]);

        elementRef.current.setAttribute('style', style);
      }
    }, [elementRef, props]);

    return <Component {...props} ref={elementRef} />;
  };

myDomElements.forEach(domElement => {
  myStyledThird[domElement] = myStyledThird(domElement);
});

export default myStyledThird;
