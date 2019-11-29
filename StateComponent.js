import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class StateComponent extends Component {

    state = {
        size: 120,
    }


    // // 初始化 state 方式一
    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     size: 80
    //     // }
    // }
    render() {
        return (
            <View>
                {/* <Text

                ></Text> */}
                <Text
                    style={{ textAlign: "center" }}
                    onPress={() => {
                        this.setState({
                            size: this.state.size + 20
                        })
                    }}
                >充气</Text>
                <Image
                    style={{ width: this.state.size, height: this.state.size }}
                    source={require('./qiqiu.png')}

                />
                <Text
                    style={{ textAlign: "center" }}
                    onPress={() => {
                        this.setState({
                            size: this.state.size - 20
                        })
                    }}
                >放气</Text>
            </View>

        )
    }
}
