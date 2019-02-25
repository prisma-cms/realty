import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  styles,
  TableView,
} from '../../../../view/List';

import { withStyles } from 'material-ui/styles';

import PublicIcon from "material-ui-icons/Public";


export class RealtyAreasListView extends TableView {


  static defaultProps = {
    ...TableView.defaultProps,
    title: "Площади",
  };


  getColumns() {

    const {
      RealtyAreaLink,
      UserLink,
      Grid,
    } = this.context;

    return [
      // {
      //   id: "id",
      // },
      {
        id: "name",
        label: "Название площади",
        renderer: (value, record) => {

          return record ? <RealtyAreaLink
            object={record}
          /> : null;
        },
      },
      {
        id: "code",
        label: "Уникальный код",
      },
      {
        id: "CreatedBy",
        label: "Владелец",
        renderer: (value) => {

          return value ? <UserLink
            user={value}
          /> : null;
        },
      },
    ]

  }

}


export {
  styles,
}

export default withStyles(styles)(props => <RealtyAreasListView
  {...props}
/>);