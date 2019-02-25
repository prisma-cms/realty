import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles/less/styles.css";

import Context from '@prisma-cms/context';

import SubscriptionProvider from "./components/SubscriptionProvider";
import ContextProvider from "./components/ContextProvider";

import RealtyAreasPage from "./components/pages/RealtyAreas";
import RealtyAreaPage from "./components/pages/RealtyAreas/RealtyArea";
import RealtyAreaCreatePage from "./components/pages/RealtyAreas/RealtyArea/Create";

export {
  ContextProvider,
  SubscriptionProvider,

  RealtyAreasPage,
  RealtyAreaPage,
  RealtyAreaCreatePage,
}

class App extends Component {

  static contextType = Context;

  render() {
    return (
      <div>
        My awesome component
      </div>
    );
  }
}

export default App;