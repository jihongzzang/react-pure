import { useEffect, useRef } from 'react';

const myStyled =
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

export default myStyled;
