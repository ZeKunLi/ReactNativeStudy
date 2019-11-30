import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FlexComponent extends Component {

    render() {
        return (
            <View>
                {/* 
                    flexDirection enum('row', 'column','row-reverse','column-reverse')
                    flexDirection属性定义了父视图中的子元素沿横轴或侧轴方片的排列方式。
                 */}
                <View style={{ flexDirection: 'row-reverse', backgroundColor: "darkgray", marginTop: 20 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>1</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>2</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>3</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                </View>
                {/* 
                    flexWrap enum('wrap', 'nowrap')
                    flexWrap属性定义了子元素在父视图内是否允许多行排列，默认为nowrap。
                */}
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "darkgray", marginTop: 20 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>1</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>2</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>3</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                </View>

                {/* 
                    justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around') 
                    justifyContent属性定义了浏览器如何分配顺着父容器主轴的弹性（flex）元素之间及其周围的空间，默认为flex-
                 */}
                <View style={{ justifyContent: 'space-evenly', flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "darkgray", marginTop: 20 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>1</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>2</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>3</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                </View>

                {/*
                    alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
                    alignItems属性以与justify-content相同的方式在侧轴方向上将当前行上的弹性元素对齐，默认为stretch。 
                 */}

                <View style={{ justifyContent: 'center', flexDirection: 'row', backgroundColor: "darkgray", marginTop: 20 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5, alignItems: "center" }}>
                        <Text style={{ fontSize: 16 }}>1</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>2</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>3</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                </View>
            </View>

        )
    }
}
