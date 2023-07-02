/* eslint-disable no-var */
// eslint-disable-next-line jsdoc/require-jsdoc
export function isTor() {
  const plugsEmpty = navigator?.plugins.length === 0;
  const moz = navigator.userAgent.includes('Mozilla/5.0');

  return plugsEmpty
    && moz;
}
