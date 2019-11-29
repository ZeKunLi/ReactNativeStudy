import React, { Component } from 'react';
import { Text, View } from 'react-native';
//原因： 从 React v15.5 开始 ，React.PropTypes助手函数已被弃用，建议使用prop-types库来定义contextTypes。
import PropTypes from 'prop-types';//ES6

export default class PropsComponent extends Component {

    static defaultProps = {
        name: 'Luckin Coffee',
        age: 3,
    }

    static propTypes = {
        name: PropTypes.string,
        sex: PropTypes.string.isRequired
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, backgroundColor: '#6D86C4' }}>Hello, {this.props.name}</Text>
                <Text style={{ fontSize: 20, backgroundColor: '#6D86C4', textAlign: "center" }}>{this.props.age}</Text>
                <Text style={{ fontSize: 20, backgroundColor: '#6D86C4', textAlign: "center" }}>{this.props.sex}</Text>
            </View>

        )
    }
}
