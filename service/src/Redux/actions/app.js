export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const TOGGLE_INSTALLER_IOS = 'TOGGLE_INSTALLER_IOS';

export const navigate = path => dispatch => {
  path = path.replace(/^[a-zA-Z]{3,5}\:\/{2}[a-zA-Z0-9_.:-]+\//, '/');
  dispatch(loadPage(path));
};

const loadPage = page => dispatch => {
  switch (page) {
    case '/':
      import('../../Screens/home-app');
      page = {
        title: 'Home',
        slug: 'home'
      };
      break;
    default:
      import('../components/error-app');
      page = {
        title: 'Not Found',
        slug: '404'
      };
  }

  dispatch(updatePage(page));
};

const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    page
  };
};

let snackbarTimer;

export const showSnackbar = () => dispatch => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  window.clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(
    () => dispatch({ type: CLOSE_SNACKBAR }),
    3000
  );
};

export const showInstallIOS = value => dispatch => {
  dispatch({ type: TOGGLE_INSTALLER_IOS, value });
};

export const updateOffline = offline => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().app.offline) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};