import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LangActionCreator from "../LangActionCreator";

function FunLang() {
  const lang = useSelector(store => store.lang);
  const loading = useSelector(store => store.loading);
  const dispatch = useDispatch();
  return (
    <div>
      Fun Lang - {lang}
      {loading && "Loading language"}
      <button
        onClick={() => {
          dispatch(LangActionCreator("gm"));
        }}
      >
        Change Fun Lang To German
      </button>
    </div>
  );
}

export default FunLang;
