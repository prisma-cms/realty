import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles/less/styles.css";

import Context from '@prisma-cms/context';

import SubscriptionProvider from "./components/SubscriptionProvider";
import ContextProvider from "./components/ContextProvider";

import RealtyAreasPage from "./components/pages/RealtyAreas";
import RealtyAreaPage from "./components/pages/RealtyAreas/RealtyArea";
import RealtyAreaCreatePage from "./components/pages/RealtyAreas/RealtyArea/Create";

import RealtyObjectsPage from "./components/pages/RealtyObjects";
import RealtyObjectPage from "./components/pages/RealtyObjects/RealtyObject";
import RealtyObjectCreatePage from "./components/pages/RealtyObjects/RealtyObject/Create";

import RealtyFloorsPage from "./components/pages/RealtyFloors";
import RealtyFloorPage from "./components/pages/RealtyFloors/RealtyFloor";
import RealtyFloorCreatePage from "./components/pages/RealtyFloors/RealtyFloor/Create";

export {
  ContextProvider,
  SubscriptionProvider,

  RealtyAreasPage,
  RealtyAreaPage,
  RealtyAreaCreatePage,

  RealtyObjectsPage,
  RealtyObjectPage,
  RealtyObjectCreatePage,

  RealtyFloorsPage,
  RealtyFloorPage,
  RealtyFloorCreatePage,
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