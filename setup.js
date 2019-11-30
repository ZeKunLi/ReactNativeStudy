import React, { Component } from 'react';

import RefComponent, { } from './RefComponent';
import Student from './Studunt'
import TangWeiStudent from './TangWeiStudent'
import { Text, View } from 'react-native';

export default class setup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 0
        }

        this.stu = new Student("汤唯", "女", "18")

        this.tang = new TangWeiStudent()

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text
                    style={{ fontSize: 20 }}
                >{this.stu.getDescription()}
                </Text>

                <Text
                    style={{ fontSize: 20 }}
                >{this.tang.getDescription()}
                </Text>

            </View >

        );
    }
}




