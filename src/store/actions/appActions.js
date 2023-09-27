import actionTypes from "./actionTypes";

export const appStartUpComplete = () => ({
  type: actionTypes.APP_START_UP_COMPLETE,
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
  type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
  contentOfConfirmModal: contentOfConfirmModal,
});

//chuyen doi ngon ngu

export const changeLanguageApp = (languageInput) => ({
  type: actionTypes.CHANGE_LANGUAGE, //khong truyeen data
  language: languageInput, //truyen du lieu vao
});
