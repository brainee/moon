import {ViewAction} from 'plume2';
import Store from '../store';
//import webapi from "webapi";
//import { message } from "antd";

export default class extends ViewAction {
  store: Store;

  init() {
    // this.query();
  }


  /**
   * 把一个组件移动到另一个组件下
   *
   */
  move(param:{from:string;to:string;type:"sub"|"before"|"after"}) {
    this.store.dispatch("comp:move", param);
  }
  /**
   *
   */
  add() {
    //this.store.dispatch("main:actor:event:add", actorIndex);
  }

  /**
   *
   */
  del() {
    //this.store.dispatch("main:actor:event:add", actorIndex);
  }

  /**
   * 更新组件配置单个属性.
   * 如果是单个属性直接到位置, 如果是多个属性则
   *
   */
  update(param:{
    compPath:string[];
    propPath:string[];
    props:object
   }) {
    this.store.dispatch("comp:update", param);
  }


  /**
   *
   */
  changeContext() {
    //this.store.dispatch("main:actor:event:add", actorIndex);
  }
}
