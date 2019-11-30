import React, { Component } from 'react';

import FlexComponent, { } from './FlexComponent';
import { Text, View } from 'react-native';

export default class setup extends Component {


    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <FlexComponent />
            </View >

        );
    }
}




