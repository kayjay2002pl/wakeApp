
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
            opacity: "80",
            set: false,
            days: this.props.days
        };

        this.toValue = 0  // przechowanie wartości animowanej, tutaj wysokości
        this.toggle = this.toggle.bind(this)
        this.toggleSwitch = this.toggleSwitch.bind(this)
        this.pressed = this.pressed.bind(this)
        this.toggleday = this.toggleday.bind(this)

    }
    componentDidMount() {
        if (this.props.toggle == 1) {
            this.setState({ set: true })
        } else {
            this.setState({ set: false })
        }
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
    toggleSwitch() {

    }
    toggleday(day) {
        var a = this.state.days
        console.log(a[day]);
        if (a[day])
            a[day] = 0
        else
            a[day] = 1
        console.log(a[day]);

        this.props.update(this.props.id, day, a[day])
        this.setState({ days: a })
        console.log(this.state.days);
    }
    pressed() {
        this.props.delete(this.props.id)
    }


    render() {

        return (

            <Animated.View style={{

                height: this.state.height, // animowany styl, tutaj wysokość View
                backgroundColor: "#FF0000",

            }} >
                <View style={{ flex: 2, backgroundColor: "#FF5722", borderBottomWidth: 2, borderBottomColor: "#757575" }} >
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 3, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 62, }}>{this.props.time}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Switch
                                onValueChange={this.toggleSwitch}
                                value={this.props.toggle == true}
                            >
                            </Switch>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={this.pressed}>
                            <ImageBackground source={Image} style={{ flex: 0.5 }} resizeMode="center"></ImageBackground>
                        </TouchableOpacity>
                        <View style={{ flex: 2 }}></View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }} onPress={this.toggle}>
                            <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={this.toggle}><View style={{ flex: 1, backgroundColor: 'blue' }}><Text style={{ flex: 1 }}>A</Text></View></TouchableOpacity>
                        </View>
                    </View>
                    {this.state.expanded ?
                        <View style={{ flex: 2 }}><Text style={{ flex: 1 }}>BBBB</Text><View style={{ flex: 1, flexDirection: 'row' }}>{Object.entries(this.state.days).map(([key, v]) => {
                            return <TouchableOpacity
                                style={{
                                    flex: 1,
                                    margin: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    backgroundColor: "rgb(255, 204, 188)",
                                    opacity: v ? 1 : 0.5
                                }}
                                onPress={() => this.toggleday(key)}
                            >
                                <Text>{key}</Text>
                            </TouchableOpacity>
                        })}</View></View>
                        :
                        <View style={{ flex: 1 }}><Text style={{ flex: 1 }}>BBBB</Text></View>}
                </View>


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