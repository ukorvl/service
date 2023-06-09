import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const resolution = {width: window.screen.availWidth, height: window.screen.availHeight};

function getWindowDimensions() {
  const { innerHeight: height, innerWidth: width } = window;
  return { height, width };
}

export const useIsTor = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [dimsEqual, setDimsEqual] = useState(false);
  const moz = navigator.userAgent.includes('Mozilla/5.0');

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowDimensions(getWindowDimensions());
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setDimsEqual(
      resolution.height === windowDimensions.height &&
      resolution.width === windowDimensions.width
    );
    console.log(resolution, windowDimensions);
  }, [windowDimensions]);

  return dimsEqual
    && moz;
};
