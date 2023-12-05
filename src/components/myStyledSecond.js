import { useEffect, useRef } from 'react';
import myDomElements from './domElements';

const myStyledSecond =
  Component =>
  ([style]) =>
  props => {
    const elementRef = useRef(null);

    useEffect(() => {
      if (elementRef) {
        elementRef.current.setAttribute('style', style);
      }
    }, [elementRef]);

    return <Component {...props} ref={elementRef} />;
  };

myDomElements.forEach(domElement => {
  myStyledSecond[domElement] = myStyledSecond(domElement);
});

export default myStyledSecond;
