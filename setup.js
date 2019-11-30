import React, { Component } from 'react';

import RefComponent, { } from './RefComponent';
import { Text, View } from 'react-native';

export default class setup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 0
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text
                    style={{ fontSize: 20 }}
                    onPress={() => {
                        this.setState({
                            // 方式一
                            // size: this.refs.refTest.getSize()
                            // 方式二
                            // size: this.refs["refTest"].getSize()
                            size: this.refTest.getSize()
                        })
                    }}
                >获取气球大小{this.state.size}
                </Text>
                <RefComponent
                    // 方式一
                    // ref="refTest"
                    ref={
                        refTest => this.refTest = refTest
                    }
                />
            </View >

        );
    }
}




