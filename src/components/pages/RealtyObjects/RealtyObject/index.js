import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import View from "../View/Object";

import ObjectPage from "../../Object";


class RealtyObject extends ObjectPage {


  static propTypes = {
    ...ObjectPage.propTypes,
    View: PropTypes.func.isRequired,
  };


  static defaultProps = {
    ...ObjectPage.defaultProps,
    View,
    // first: 10,
  }


  // constructor(props) {

  //   console.log("RealtyObjects constructor");

  //   super(props)

  // }


  componentWillMount() {

    if (!this.Renderer) {

      const {
        View,
      } = this.props;

      const {
        query: {
          realtyObject,
          updateRealtyObjectProcessor,
        },
      } = this.context;

      this.Renderer = compose(
        graphql(gql(realtyObject)),
        graphql(gql(updateRealtyObjectProcessor)),
      )(View);

    }

    super.componentWillMount && super.componentWillMount();
  }

  render() {

    const {
      Renderer,
    } = this;

    const {
      View,
      ...other
    } = this.props;

    return <Renderer
      {...other}
      onSave={this.onSave}
      setPageMeta={object => {

        let {
          id,
          name,
        } = object || {};

        name = name || id;

        return this.setPageMeta({
          title: name && `Площадь ${name}` || undefined,
          status: id ? 200 : 404,
        })
      }}
    />
  }
}


export default RealtyObject; 