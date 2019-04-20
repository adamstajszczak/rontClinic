import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { BackCard, FrontCard, Page, Navbar, Sidebar } from "components/";

import Pages from "utils/pages";
import Subpages from "utils/subpages";

import { Wrong } from "pages/";

class AppContainer extends Component {
  renderPages = pagesToRender => {
    if (!pagesToRender || pagesToRender.length <= 0) return <React.Fragment />;

    return pagesToRender.map((e, i) => {
      const props = {
        ...e,
        id: i
      };

      return (
        <Route
          path={e.path}
          exact={e.path === "/"}
          component={() => <Page {...props} />}
        />
      );
    });
  };

  render() {
    return (
      <SnackbarProvider maxSnack={3}>
      <div style={{width: "100vw", height: "100vh", maxWidth: "100%", maxHeight: "100%", overflow: "hidden", position: "relative"}}>
        <BackCard>
          <Navbar />
          <Sidebar pages={Pages} />
        <FrontCard
          >
            <Switch>
              {this.renderPages(Pages)}
              {this.renderPages(Subpages)}
              <Route component={Wrong} />
            </Switch>
          </FrontCard>
        </BackCard>
      </div>
      </SnackbarProvider>
    );
  }
}

export default AppContainer;
