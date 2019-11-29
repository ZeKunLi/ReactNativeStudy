import React, { Component } from 'react';

import PropsComponent, { } from './PropsComponent';
import { Text, View } from 'react-native';

export default class setup extends Component {
    render() {
        var params = { name: "汤唯", age: 20, sex: "女" }
        var {name,sex } = params
        return (            
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <PropsComponent
                    // //延展操作符
                    // {...params}
                    // 解构操作符
                    name={name}
                    sex={sex}
                />
            </View >

        );
    }
}




