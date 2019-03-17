import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import RealtyObjectPage from "../";

class RealtyObjectCreatePage extends RealtyObjectPage {


  static defaultProps = {
    ...RealtyObjectPage.defaultProps,
    data: {
      object: {},
    },
    _dirty: {
      name: "",
    },
  }


  onSave = (result) => {
    // console.log("this result", result);

    const {
      response,
    } = result.data || {};

    const {
      id,
    } = response && response.data || {}

    if (id) {

      const {
        router: {
          history,
        },
      } = this.context;

      history.push(`/realty-objects/${id}`);

    }
  }

  componentWillMount() {

    if (!this.Renderer) {

      const {
        View,
      } = this.props;

      const {
        query: {
          createRealtyObjectProcessor,
        },
      } = this.context;

      this.Renderer = compose(
        graphql(gql(createRealtyObjectProcessor)),
      )(View);

    }

    super.componentWillMount && super.componentWillMount();
  }

}


export default RealtyObjectCreatePage;