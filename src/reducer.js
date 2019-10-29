const LangReducer = (state, action) => {
  console.log("lang reducer called for - " + action.payload);
  switch (action.type) {
    case "LANG_UPDATE":
      return action.payload;
    default:
      return state;
  }
};

const LoadingReducer = (state, action) => {
  console.log("loading reducer called for - " + action.payload);
  switch (action.type) {
    case "LOADING_UPDATE":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = (store, action) => {
  return {
    lang: LangReducer(store.lang, action),
    loading: LoadingReducer(store.loading, action)
  };
};

export default rootReducer;
