import React, { Component } from 'react';
import { Text, View } from 'react-native';

export var name = "Luckin Coffee"
export var age = "2"


export default class EIComponent extends Component {
    render() {
        return <Text style={{ fontSize: 20, backgroundColor: 'yellow' }}>Hello, {this.props.name}</Text>
    }
}

export function sum(a, b) {
    return parseInt(a) + parseInt(b);
}
