export const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
export const isInStandaloneMode = () =>
  !'standalone' in window.navigator && window.navigator.standalone;

export const isInstalled = () => {
  if (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  ) {
    return true;
  }
  return false;
};
