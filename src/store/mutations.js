/**
 * 直接操作state，唯一可修改state的地方
 */
import * as types from './mutation-types.js'

const mutations = {
  [types.SET_COMPONENT_DATA] (state, payload) {
    state.curComponentData = payload;
    state.showOperateMenu = true;
  }
}

export default mutations
