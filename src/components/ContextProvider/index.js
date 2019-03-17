
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
      ...this.prepareRealtyObjectQuery(),
      ...this.prepareRealtyFloorQuery(),
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
  

  prepareRealtyObjectQuery() {

    const {
      queryFragments,
    } = this.context;


    const {
      RealtyObjectNoNestingFragment,
      UserNoNestingFragment,
      BatchPayloadNoNestingFragment,
    } = queryFragments;


    const realtyObjectFragment = `
      fragment realtyObject on RealtyObject {
        ...RealtyObjectNoNesting
        CreatedBy{
          ...UserNoNesting
        }
      }

      ${UserNoNestingFragment}
      ${RealtyObjectNoNestingFragment}
    `;


    const realtyObjectsConnection = `
      query realtyObjectsConnection (
        $where: RealtyObjectWhereInput
        $orderBy: RealtyObjectOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objectsConnection: realtyObjectsConnection (
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
              ...realtyObject
            }
          }
        }
      }

      ${realtyObjectFragment}
    `;


    const realtyObjects = `
      query realtyObjects (
        $where: RealtyObjectWhereInput
        $orderBy: RealtyObjectOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objects: realtyObjects (
          where: $where
          orderBy: $orderBy
          skip: $skip
          after: $after
          before: $before
          first: $first
          last: $last
        ){
          ...realtyObject
        }
      }

      ${realtyObjectFragment}
    `;


    const realtyObject = `
      query realtyObject (
        $where: RealtyObjectWhereUniqueInput!
      ){
        object: realtyObject(
          where: $where
        ){
          ...realtyObject
        }
      }

      ${realtyObjectFragment}
    `;


    const createRealtyObjectProcessor = `
      mutation createRealtyObjectProcessor(
        $data: RealtyObjectCreateInput!
      ) {
        response: createRealtyObjectProcessor(
          data: $data
        ){
          success
          message
          errors{
            key
            message
          }
          data{
            ...realtyObject
          }
        }
      }

      ${realtyObjectFragment}
    `;


    const updateRealtyObjectProcessor = `
      mutation updateRealtyObjectProcessor(
        $data: RealtyObjectUpdateInput!
        $where: RealtyObjectWhereUniqueInput!
      ) {
        response: updateRealtyObjectProcessor(
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
            ...realtyObject
          }
        }
      }

      ${realtyObjectFragment}
    `;


    const deleteRealtyObject = `
      mutation deleteRealtyObject (
        $where: RealtyObjectWhereUniqueInput!
      ){
        deleteRealtyObject(
          where: $where
        ){
          ...RealtyObjectNoNesting
        }
      }
      ${RealtyObjectNoNestingFragment}
    `;


    const deleteManyRealtyObjects = `
      mutation deleteManyRealtyObjects (
        $where: RealtyObjectWhereInput
      ){
        deleteManyRealtyObjects(
          where: $where
        ){
          ...BatchPayloadNoNesting
        }
      }
      ${BatchPayloadNoNestingFragment}
    `;


    return {
      realtyObjectsConnection,
      realtyObjects,
      realtyObject,
      createRealtyObjectProcessor,
      updateRealtyObjectProcessor,
      deleteRealtyObject,
      deleteManyRealtyObjects,
    }
  }
  

  prepareRealtyFloorQuery() {

    const {
      queryFragments,
    } = this.context;


    const {
      RealtyFloorNoNestingFragment,
      UserNoNestingFragment,
      BatchPayloadNoNestingFragment,
    } = queryFragments;


    const realtyFloorFragment = `
      fragment realtyFloor on RealtyFloor {
        ...RealtyFloorNoNesting
        CreatedBy{
          ...UserNoNesting
        }
      }

      ${UserNoNestingFragment}
      ${RealtyFloorNoNestingFragment}
    `;


    const realtyFloorsConnection = `
      query realtyFloorsConnection (
        $where: RealtyFloorWhereInput
        $orderBy: RealtyFloorOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objectsConnection: realtyFloorsConnection (
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
              ...realtyFloor
            }
          }
        }
      }

      ${realtyFloorFragment}
    `;


    const realtyFloors = `
      query realtyFloors (
        $where: RealtyFloorWhereInput
        $orderBy: RealtyFloorOrderByInput
        $skip: Int
        $after: String
        $before: String
        $first: Int
        $last: Int
      ){
        objects: realtyFloors (
          where: $where
          orderBy: $orderBy
          skip: $skip
          after: $after
          before: $before
          first: $first
          last: $last
        ){
          ...realtyFloor
        }
      }

      ${realtyFloorFragment}
    `;


    const realtyFloor = `
      query realtyFloor (
        $where: RealtyFloorWhereUniqueInput!
      ){
        object: realtyFloor(
          where: $where
        ){
          ...realtyFloor
        }
      }

      ${realtyFloorFragment}
    `;


    const createRealtyFloorProcessor = `
      mutation createRealtyFloorProcessor(
        $data: RealtyFloorCreateInput!
      ) {
        response: createRealtyFloorProcessor(
          data: $data
        ){
          success
          message
          errors{
            key
            message
          }
          data{
            ...realtyFloor
          }
        }
      }

      ${realtyFloorFragment}
    `;


    const updateRealtyFloorProcessor = `
      mutation updateRealtyFloorProcessor(
        $data: RealtyFloorUpdateInput!
        $where: RealtyFloorWhereUniqueInput!
      ) {
        response: updateRealtyFloorProcessor(
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
            ...realtyFloor
          }
        }
      }

      ${realtyFloorFragment}
    `;


    const deleteRealtyFloor = `
      mutation deleteRealtyFloor (
        $where: RealtyFloorWhereUniqueInput!
      ){
        deleteRealtyFloor(
          where: $where
        ){
          ...RealtyFloorNoNesting
        }
      }
      ${RealtyFloorNoNestingFragment}
    `;


    const deleteManyRealtyFloors = `
      mutation deleteManyRealtyFloors (
        $where: RealtyFloorWhereInput
      ){
        deleteManyRealtyFloors(
          where: $where
        ){
          ...BatchPayloadNoNesting
        }
      }
      ${BatchPayloadNoNestingFragment}
    `;


    return {
      realtyFloorsConnection,
      realtyFloors,
      realtyFloor,
      createRealtyFloorProcessor,
      updateRealtyFloorProcessor,
      deleteRealtyFloor,
      deleteManyRealtyFloors,
    }
  }

}

export default ContextProvider;