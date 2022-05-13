import {
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
  init,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

// debugger

// 1. 创建一个 vnode
var vnode = h('div#container.two.classes', { on: { click: () => {} } }, [
  h('p', {key: 'A'}, 'old-A'),
  h('p', {key: 'B'}, 'old-B'),
  h('p', {key: 'I'}, 'old-I'),
  h('p', {key: 'E'}, 'old-E'),
  h('p', {key: 'F'}, 'old-F'),
  h('p', {key: 'G'}, 'old-G'),
]);
// 2. 选择容器
var container = document.getElementById('container');
// 3. 将 vnode patch到容器中
patch(container, vnode);
// 4. 生成一个新的vnode
var newVnode = h('div#container.two.classes', { on: { click: () => {} } }, [
  h('p', { key: 'A' }, 'new-A'),
  h('p', { key: 'F' }, 'new-F'),
  h('p', { key: 'H' }, 'new-H'),
  h('p', { key: 'O' }, 'new-O'),
  h('p', { key: 'I' }, 'new-I'),
  h('p', { key: 'D' }, 'new-D'),
  h('p', { key: 'G' }, 'new-G'),
]);
// 5. 用新DOM替换老DOM
patch(vnode, newVnode);