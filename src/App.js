import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FRParent from "./forward-ref/FRParent";
import Portal from "./portals/Portal";
import PortalModalDemo from "./portals/PortalModalDemo";
import Counter from "./hoc/Counter";
import RenderProps from "./render-props/RenderProps";
import ComponentC from "./context/ComponentC";
import Operation from "./use-callback/Operation";
import LazyLoad from "./lazy-load/LazyLoad";
import LangActionCreator from "./LangActionCreator";
import ShowName from "./react-router-hooks/ShowName";
import FunLang from "./redux-hooks/FunLang";
import TestComponent from "./test-component/TestComponent";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/fr-ref" component={FRParent} />
          <Route path="/portal" component={Portal} />
          <Route path="/portal-modal" component={PortalModalDemo} />
          <Route path="/counter" component={Counter} />
          <Route path="/render-props" component={RenderProps} />
          <Route path="/context" component={ComponentC} />
          <Route path="/use-callback" component={Operation} />
          <Route path="/lazy-load" component={LazyLoad} />
          <Route path="/redux-hook" component={FunLang} />
          <Route path="/test-component" component={TestComponent} />
          <Route path="/router-dom/:firstName/:lastName" component={ShowName} />
        </Router>
        <div>
          <button
            onClick={() => {
              this.props.setLang("fr");
            }}
          >
            Change Lang to French
          </button>
          <div>{this.props.loading && "Loading...."}</div>
          Lang - {this.props.lang}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    lang: store.lang,
    loading: store.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLang: lang => dispatch(LangActionCreator(lang))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
