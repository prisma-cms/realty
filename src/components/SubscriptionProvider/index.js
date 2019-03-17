
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import gql from "graphql-tag";

import Context from '@prisma-cms/context';

export default class SubscriptionProvider extends Component {


  static contextType = Context;


  state = {
    subscriptions: [],
  }


  componentDidMount() {

    this.subscribe();

  }

  componentWillUnmount() {

    this.unsubscribe();

  }


  async subscribe() {

    const {
      client,
    } = this.context;


    if(!client){
      console.error("client is empty");
      return;
    }

    await this.unsubscribe();


    let {
      subscriptions,
    } = this.state;


    const subscribeRealtyArea = gql`
      subscription realtyArea{
        realtyArea{
          mutation
          node{
            id
          }
        }
      }
    `;

    const realtyAreaSub = await client
      .subscribe({
        query: subscribeRealtyArea,
        variables: {
        },
      })
      .subscribe({
        next: async (data) => {

          await this.reloadData();

        },
        error(error) {
          console.error('subscribeCalls callback with error: ', error)
        },
      });


    subscriptions.push(realtyAreaSub);

    

    const subscribeRealtyObject = gql`
      subscription realtyObject{
        realtyObject{
          mutation
          node{
            id
          }
        }
      }
    `;

    const realtyObjectSub = await client
      .subscribe({
        query: subscribeRealtyObject,
        variables: {
        },
      })
      .subscribe({
        next: async (data) => {

          await this.reloadData();

        },
        error(error) {
          console.error('subscribeCalls callback with error: ', error)
        },
      });


    subscriptions.push(realtyObjectSub);



    const subscribeRealtyFloor = gql`
      subscription realtyFloor{
        realtyFloor{
          mutation
          node{
            id
          }
        }
      }
    `;

    const realtyFloorSub = await client
      .subscribe({
        query: subscribeRealtyFloor,
        variables: {
        },
      })
      .subscribe({
        next: async (data) => {

          await this.reloadData();

        },
        error(error) {
          console.error('subscribeCalls callback with error: ', error)
        },
      });


    subscriptions.push(realtyFloorSub);




    this.setState({
      subscriptions,
    });

  }


  unsubscribe() {


    return new Promise((resolve) => {

      const {
        subscriptions,
      } = this.state;

      if (subscriptions && subscriptions.length) {


        subscriptions.map(n => {
          n.unsubscribe();
        });

        Object.assign(this.state, {
          subscriptions: [],
        });

      }

      resolve();

    });

  }


  async reloadData() {

    const {
      client,
      loadApiData,
    } = this.context;

    await loadApiData();

    await client.reFetchObservableQueries();

  }


  render() {

    const {
      children,
      user,
      client,
      loadApiData,
      ...other
    } = this.props;

    return children ? <children.type
      {...children.props}
      {...other}
    /> : null;

  }

}