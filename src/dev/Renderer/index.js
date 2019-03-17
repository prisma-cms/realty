import React, { Component } from 'react';
import PropTypes from "prop-types";

import App, {
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

} from "../../App";

import { Renderer as PrismaCmsRenderer } from '@prisma-cms/front'

import MainMenu from './MainMenu';

class DevRenderer extends PrismaCmsRenderer {


  static propTypes = {
    ...PrismaCmsRenderer.propTypes,
    pure: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    ...PrismaCmsRenderer.defaultProps,
    pure: false,
  }


  getRoutes() {

    let routes = super.getRoutes();

    return [
      {
        exact: true,
        path: "/",
        component: App,
      },
      {
        exact: true,
        path: "/realty-areas",
        component: RealtyAreasPage,
      },
      {
        exact: true,
        path: "/realty-areas/create",
        component: RealtyAreaCreatePage,
      },
      {
        exact: true,
        path: "/realty-areas/:id",
        render: props => {

          const {
            match: {
              params: {
                id,
              },
            },
          } = props;

          return <RealtyAreaPage
            key={id}
            where={{
              id,
            }}
            {...props}
          />
        },
      },
      {
        exact: true,
        path: "/realty-objects",
        component: RealtyObjectsPage,
      },
      {
        exact: true,
        path: "/realty-objects/create",
        component: RealtyObjectCreatePage,
      },
      {
        exact: true,
        path: "/realty-objects/:id",
        render: props => {

          const {
            match: {
              params: {
                id,
              },
            },
          } = props;

          return <RealtyObjectPage
            key={id}
            where={{
              id,
            }}
            {...props}
          />
        },
      },
      {
        exact: true,
        path: "/realty-floors",
        component: RealtyFloorsPage,
      },
      {
        exact: true,
        path: "/realty-floors/create",
        component: RealtyFloorCreatePage,
      },
      {
        exact: true,
        path: "/realty-floors/:id",
        render: props => {

          const {
            match: {
              params: {
                id,
              },
            },
          } = props;

          return <RealtyFloorPage
            key={id}
            where={{
              id,
            }}
            {...props}
          />
        },
      },
      // {
      //   path: "*",
      //   render: props => this.renderOtherPages(props),
      // },
    ].concat(routes);

  }



  renderMenu() {

    return <MainMenu />
  }
  

  renderWrapper() {

    return <ContextProvider>
      <SubscriptionProvider>
        {super.renderWrapper()}
      </SubscriptionProvider>
    </ContextProvider>;

  }


  render() {

    const {
      pure,
      ...other
    } = this.props;

    return pure ? <App
      {...other}
    /> : super.render();

  }

}

export default DevRenderer;