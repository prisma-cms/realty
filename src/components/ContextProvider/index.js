
import React, {
  Component,
} from 'react';

import Context from '@prisma-cms/context';

import * as UI from "../ui";

class ContextProvider extends Component {

  static contextType = Context;


  // componentWillMount() {

  //   const {
  //     query,
  //     ...other
  //   } = this.context;

  //   this.newContext = {
  //     query: {
  //       ...query,
  //       ...this.prepareQuery(),
  //     },
  //     ...other
  //   }

  // }


  render() {

    const {
      children,
    } = this.props;

    let {
      query,
    } = this.context;

    Object.assign(this.context, {
      query: {
        ...query,
        ...this.prepareQuery(),
      },
      ...UI,
    });

    return <Context.Provider
      value={this.context}
    >
      {children || null}
    </Context.Provider>;

  }

  prepareQuery() {

    return {
      ...this.prepareRealtyAreaQuery(),
    }
  }
  

  prepareRealtyAreaQuery() {

    const {
      queryFragments,
    } = this.context;


    const {
      RealtyAreaNoNestingFragment,
      UserNoNestingFragment,
      BatchPayloadNoNestingFragment,
    } = queryFragments;


    const realtyAreaFragment = `
      fragment realtyArea on RealtyArea {
        ...RealtyAreaNoNesting
        CreatedBy{
          ...UserNoNesting
        }
      }

      ${UserNoNestingFragment}
      ${RealtyAreaNoNestingFragment}
    `;


    const realtyAreasConnection = `
      query realtyAreasConnection (
        $where: RealtyAreaWhereInput
        $orderBy: RealtyAreaOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objectsConnection: realtyAreasConnection (
          where: $where
          orderBy: $orderBy
          skip: $skip
          after: $after
          before: $before
          first: $first
          last: $last
        ){
          aggregate{
            count
          }
          edges{
            node{
              ...realtyArea
            }
          }
        }
      }

      ${realtyAreaFragment}
    `;


    const realtyAreas = `
      query realtyAreas (
        $where: RealtyAreaWhereInput
        $orderBy: RealtyAreaOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objects: realtyAreas (
          where: $where
          orderBy: $orderBy
          skip: $skip
          after: $after
          before: $before
          first: $first
          last: $last
        ){
          ...realtyArea
        }
      }

      ${realtyAreaFragment}
    `;


    const realtyArea = `
      query realtyArea (
        $where: RealtyAreaWhereUniqueInput!
      ){
        object: realtyArea(
          where: $where
        ){
          ...realtyArea
        }
      }

      ${realtyAreaFragment}
    `;


    const createRealtyAreaProcessor = `
      mutation createRealtyAreaProcessor(
        $data: RealtyAreaCreateInput!
      ) {
        response: createRealtyAreaProcessor(
          data: $data
        ){
          success
          message
          errors{
            key
            message
          }
          data{
            ...realtyArea
          }
        }
      }

      ${realtyAreaFragment}
    `;


    const updateRealtyAreaProcessor = `
      mutation updateRealtyAreaProcessor(
        $data: RealtyAreaUpdateInput!
        $where: RealtyAreaWhereUniqueInput!
      ) {
        response: updateRealtyAreaProcessor(
          data: $data
          where: $where
        ){
          success
          message
          errors{
            key
            message
          }
          data{
            ...realtyArea
          }
        }
      }

      ${realtyAreaFragment}
    `;


    const deleteRealtyArea = `
      mutation deleteRealtyArea (
        $where: RealtyAreaWhereUniqueInput!
      ){
        deleteRealtyArea(
          where: $where
        ){
          ...RealtyAreaNoNesting
        }
      }
      ${RealtyAreaNoNestingFragment}
    `;


    const deleteManyRealtyAreas = `
      mutation deleteManyRealtyAreas (
        $where: RealtyAreaWhereInput
      ){
        deleteManyRealtyAreas(
          where: $where
        ){
          ...BatchPayloadNoNesting
        }
      }
      ${BatchPayloadNoNestingFragment}
    `;


    return {
      realtyAreasConnection,
      realtyAreas,
      realtyArea,
      createRealtyAreaProcessor,
      updateRealtyAreaProcessor,
      deleteRealtyArea,
      deleteManyRealtyAreas,
    }
  }

}

export default ContextProvider;