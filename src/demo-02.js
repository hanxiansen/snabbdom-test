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

// 创建一个 vnode
var vnode = h('div#container.two.classes', { on: { click: () => {} } }, [
  h('span', { style: { fontWeight: 'bold' } }, '这只是普通文本'),
  ' and this is just normal text',
  h('a', { props: { href: '/foo' } }, '这是一个链接!')
]);
// 选择容器
var container = document.getElementById('container');
// 将vnode patch到容器中
patch(container, vnode);
// 生成一个新的vnode
var newVnode = h('div#container.two.classes', { on: { click: () => {} } }, [
  h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, '现在是斜体类型文本'),
  ' and this is still just normal text',
  h('a', { props: { href: '/bar' } }, '这是一个链接!')
]);
// 用新DOM替换老DOM
patch(vnode, newVnode);