import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LifecycleComponent extends Component {
    constructor(props) {
        console.log("----constructor----")
        super(props);

        this.state = {
            count: 0,
        }

        this.props = {

        }
    }

    componentWillMount() {
        console.log("----componentWillMount----")
    }

    componentDidMount() {
        console.log("----componentDidMount----")
    }

    componentWillReceiveProps(newProps) {
        console.log("----componentWillReceiveProps----")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("----shouldComponentUpdate----")
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("----componentWillUpdate----")
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("----componentDidUpdate----")
    }

    componentWillUnmount() {
        console.log("----componentWillUnmount----")
    }

    render() {
        console.log("----render----")
        return <View>
            <Text
                style={{
                    fontSize: 20, backgroundColor: 'yellow'
                }}
                onPress={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}
            >Hello, {this.props.name}有本事你打我呀
            </Text>
            <Text style={{ fontSize: 50 }}>
                被暴击{this.state.count}次
            </Text>
        </View>
    }
}
