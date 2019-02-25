import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import View from "../View/Object";

import ObjectPage from "../../Object";


class RealtyArea extends ObjectPage {


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

  //   console.log("RealtyAreas constructor");

  //   super(props)

  // }


  componentWillMount() {

    if (!this.Renderer) {

      const {
        View,
      } = this.props;

      const {
        query: {
          realtyArea,
          updateRealtyAreaProcessor,
        },
      } = this.context;

      this.Renderer = compose(
        graphql(gql(realtyArea)),
        graphql(gql(updateRealtyAreaProcessor)),
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


export default RealtyArea; 