import React, { Component } from 'react';

import EIComponent, { age, name, sum } from './EIComponent';
import { Text, View } from 'react-native';

export default class setup extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            remove: true
        })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>{name}</Text>
                <Text>{age}岁</Text>
                <Text>2017+{age} = {sum(2017, age)}</Text>
            </View>

        );
    }
}




