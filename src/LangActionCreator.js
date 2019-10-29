const LangActionCreator = lang => {
  return {
    type: "LANG_UPDATE",
    payload: lang
  };
};

const LoadngActionCreator = loadingStatus => {
  return {
    type: "LOADING_UPDATE",
    payload: loadingStatus
  };
};

const LangActionAsyncCreator = lang => {
  console.log(lang);
  return dispatch => {
    dispatch(LoadngActionCreator(true));
    setTimeout(() => {
      dispatch(LangActionCreator(lang));
      dispatch(LoadngActionCreator(false));
    }, 4000);
  };
};

export default LangActionAsyncCreator;
