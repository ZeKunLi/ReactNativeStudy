import React, { Component } from 'react';

import LifecycleComponent from './LifecycleComponent';
import { Text, View } from 'react-native';

export default class setup extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            remove: true
        })
    }

    render() {
        var view = this.state.remove ? null : <LifecycleComponent name="小明" />
        var text = this.state.remove ? "让他复活" : "干掉他"
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {view}
                <Text style={{ backgroundColor: "red" }}
                    onPress={() => {
                        this.setState({
                            remove: !this.state.remove
                        })
                    }}
                >{text}</Text>
            </View>

        );
    }
}




