import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { red } from 'ansi-colors';
/**
 * 方式一：ES6
 * 推荐
 */
export default class HelloComponent extends Component {
    render() {
        return <Text style={{ fontSize: 20, backgroundColor: 'yellow' }}>Hello, {this.props.name}</Text>
    }
}
/**
 * 方式二：ES5
 * 在React16以上，已经摒弃了     React.createClass()    这个方法
 */

// var HelloComponent = React.createClass({
//     render() {
//         return <Text style={{ fontSize: 20, backgroundColor: 'red' }}>Hello, world!</Text>
//     }
// })

// module.exports = HelloComponent;

/**
 * 方式三：函数式
 * 无状态,不能使用 this
 */
// function HelloComponent(props) {
//     return <Text style={{ fontSize: 20, backgroundColor: 'red' }}>Hello, {props.name}</Text>
// }

// module.exports = HelloComponent;