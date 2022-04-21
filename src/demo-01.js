import { h } from 'snabbdom/src/h'
import { init } from 'snabbdom/src/init'

// 参数：数组，传入模块
// 返回值：patch 函数，作用对比两个 vnode 的差异并更新到真实的 DOM
const patch = init([])

// 第一个参数：标签 + 选择器
// 第二个参数：如果是字符串就是标签的内容
let vnode = h('div#container.cls', 'Hello World')

const app = document.getElementById('app')

// 第一个参数：可以是 DOM 元素，内部会把 DOM 元素转换成 vnode
// 第二个参数： VNode
// 返回值：VNode
const oldVNode = patch(app, vnode)

// 假设时刻
vnode = h('div', 'Hello Snabbdom')
patch(oldVNode, vnode)