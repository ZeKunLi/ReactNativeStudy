import React, { Component } from 'react';

import HelloComponent from './HelloComponent';
import { Text, View } from 'react-native';

export default class setup extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <HelloComponent
                    name="小明"
                />
            </View>

        );
    }
}




