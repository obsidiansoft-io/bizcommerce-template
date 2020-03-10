import {
  UPDATE_PAGE,
  UPDATE_OFFLINE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  TOGGLE_INSTALLER_IOS
} from '../actions/app.js';

const INITIAL_STATE = {
  page: {
    title: 'Home',
    path: "/"
  },
  offline: false,
  snackbarOpened: false,
  showInstallerIos: false
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbarOpened: true
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false
      };
    case TOGGLE_INSTALLER_IOS:
      return {
        ...state,
        showInstallerIos: action.value
      }
    default:
      return state;
  }
};

export default app;
