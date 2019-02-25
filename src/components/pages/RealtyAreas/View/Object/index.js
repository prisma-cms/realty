import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditableView from "../../../../view/Object/Editable";

import { withStyles, IconButton } from 'material-ui';

import ExitIcon from "material-ui-icons/ExitToApp";
import JoinIcon from "material-ui-icons/GroupAdd";


import PublicIcon from "material-ui-icons/Public";

import gql from 'graphql-tag';

import { Typography } from 'material-ui';


export const styles = theme => {

  return {
    root: {
      // border: "1px solid blue",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    membersShortList: {
      alignItems: "start",
      display: "inline-flex",

      "& > *": {
        margin: 2,
      },
    },
    chat: {
      height: "100%",
      // border: "1px solid green",
      display: "flex",
      flexDirection: "column",
    },
    messages: {
      overflow: "hidden",
      // border: "1px solid yellow",
      flex: 1,
    },
    editor: {
      // border: "1px solid red",
    },
  }
}



export class RealtyAreaView extends EditableView {


  canEdit() {

    const {
      id,
      CreatedBy,
    } = this.getObjectWithMutations() || {}


    const {
      id: createdById,
    } = CreatedBy || {};

    const {
      id: currentUserId,
    } = this.getCurrentUser() || {};

    return !id || (currentUserId && currentUserId === createdById) ? true : false;
  }



  renderDefaultView() {

    const {
      Grid,
    } = this.context;

    const {
      classes,
    } = this.props;

    const object = this.getObjectWithMutations();
    const canEdit = this.canEdit();
    const inEditMode = this.isInEditMode();


    const {
      id: objectId, 
      name,
    } = object;
 

    let content = null;


    if(inEditMode) {

      content = <Grid
        container
      >
        <Grid
          item
          xs={12}
        >
          {this.getTextField({
            name: "name",
          })}
        </Grid>
      </Grid>

    }

    return content;

  }

  renderEditableView() {

    return this.renderDefaultView();
  }

  render() {

    const {
      classes,
    } = this.props;

    return <div
      className={classes.root}
    >
      {super.render()}
    </div>
  }

}


export default withStyles(styles)(props => <RealtyAreaView
  {...props}
/>);