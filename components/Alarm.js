
import React, { Component } from 'react';
import { Switch, View, Text, PropTypes, StyleSheet, Animated, TouchableOpacity, TouchableOpacityBase, ImageBackground, ViewBase } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from './MyButton';
import Image from '../assets/trash.png'




class Alarm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: new Animated.Value(200), // początkowa wartość wysokości itema
            expanded: false, // zwinięty
            days: ["pn", "wt", "śr", "cz", "pt", "sb", "nd"]
        };

        this.toValue = 0  // przechowanie wartości animowanej, tutaj wysokości
        this.toggle = this.toggle.bind(this)

    }

    toggle() {

        if (!this.state.expanded) this.toValue = 240
        else this.toValue = 200

        Animated.spring(this.state.height, {
            toValue: this.toValue,
            useNativeDriver: false,
        }).start();
        var bl = !this.state.expanded
        this.setState({ expanded: bl })
        // tu zmień this.state.expanded na przeciwny

    }


    render() {

        return (

            <Animated.View style={{

                height: this.state.height, // animowany styl, tutaj wysokość View
                backgroundColor: "#FF0000",

            }} >
                <TouchableOpacity style={{ flex: 2, backgroundColor: "#FF5722", borderBottomWidth: 2, borderBottomColor: "#757575" }} onPress={this.toggle}>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 3, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 62, }}>00:00</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Switch></Switch>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <ImageBackground source={Image} style={{ flex: 0.5 }} resizeMode="center"></ImageBackground>
                        </View>
                        <View style={{ flex: 2 }}></View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Switch></Switch>
                        </View>
                    </View>
                    {this.state.expanded ?
                        <View style={{ flex: 2 }}><Text style={{ flex: 1 }}>BBBB</Text><View style={{ flex: 1, flexDirection: 'row' }}>{this.state.days.map(result => {
                            return <View style={{ flex: 1, margin: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: "red" }}><Text>{result}</Text></View>
                        })}</View></View>
                        :
                        <View style={{ flex: 1 }}><Text style={{ flex: 1 }}>BBBB</Text></View>}
                </TouchableOpacity>


            </Animated.View >
        )
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default Alarm;