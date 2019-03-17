import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import RealtyFloorPage from "../";

class RealtyFloorCreatePage extends RealtyFloorPage {


  static defaultProps = {
    ...RealtyFloorPage.defaultProps,
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

      history.push(`/realty-floors/${id}`);

    }
  }

  componentWillMount() {

    if (!this.Renderer) {

      const {
        View,
      } = this.props;

      const {
        query: {
          createRealtyFloorProcessor,
        },
      } = this.context;

      this.Renderer = compose(
        graphql(gql(createRealtyFloorProcessor)),
      )(View);

    }

    super.componentWillMount && super.componentWillMount();
  }

}


export default RealtyFloorCreatePage;