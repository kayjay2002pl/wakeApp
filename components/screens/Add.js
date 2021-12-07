
import React, { Component } from 'react';
import { Switch, View, Text, PropTypes, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from '../MyButton';
import CircleButton from "../CircleButton"
import Database from '../Database';



class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            degrees: [0, 0.52, 1.05, 1.57, 2.09, 2.61, 3.13, 3.65, 4.17, 4.69, 5.21, 5.73],
            mode: 1,
            hour: "00",
            minute: "00"
        };
        this.add = this.add.bind(this)
        this.hours = this.hours.bind(this)
        this.sett = this.sett.bind(this)
    }
    add() {
        Database.add(this.state.hour + ":" + this.state.minute);
        this.props.navigation.navigate("Main")
    }
    sett(a) {
        this.setState({ mode: a })
    }
    hours(a) {
        console.log(a);
        if (a < 10)
            a = "0" + a
        this.setState({ hour: a })

    }
    minutes(a) {
        if (a < 10)
            a = "0" + a
        this.setState({ minute: a })
    }
    clockbutt(rad, damn) {
        if (this.state.mode) {
            if (!damn) {
                var text = Math.floor(rad / 0.52) + 3
                if (text > 12)
                    text -= 12

                return <View style={{
                    position: 'absolute',
                    left: 45 + (40 * Math.cos(rad)) + "%",
                    top: 45 + (40 * Math.sin(rad)) + "%",


                }} ><CircleButton title={text} func={() => this.hours(text)} size={40}></CircleButton></View>
            } else {

                if (damn) {
                    var text = Math.floor(rad / 0.52) + 15
                    if (text > 24)
                        text -= 12
                    if (text == 24)
                        text = 0
                    return <View style={{
                        position: 'absolute',
                        left: 45 + (28 * Math.cos(rad)) + "%",
                        top: 45 + (28 * Math.sin(rad)) + "%",


                    }} ><CircleButton title={text} func={() => this.hours(text)} size={40}></CircleButton></View>
                }

            }
        } else {
            var text = Math.floor(rad / 0.52) + 3
            if (text >= 12)
                text -= 12
            text = text * 5
            return <View style={{
                position: 'absolute',
                left: 45 + (40 * Math.cos(rad)) + "%",
                top: 45 + (40 * Math.sin(rad)) + "%",


            }} ><CircleButton title={text} func={() => this.minutes(text)} size={40}></CircleButton></View>
        }
    }

    render() {
        return (

            <View style={styles.main} >
                <View style={styles.top}>
                    <TouchableOpacity style={{ width: '50%', height: '100%', backgroundColor: this.state.mode ? "purple" : "transparent" }} onPress={() => this.sett(1)}></TouchableOpacity>
                    <TouchableOpacity style={{ width: '50%', height: '100%', backgroundColor: !this.state.mode ? "purple" : "transparent" }} onPress={() => this.sett(0)}></TouchableOpacity>
                </View>
                <View style={styles.clock}>
                    <Text style={{ fontSize: 36 }}> </Text>
                    <Text style={{ fontSize: 42 }}>{this.state.hour}:{this.state.minute}</Text>
                    {this.state.degrees.map(result => {
                        return this.clockbutt(result, false)
                    })}
                    {this.state.degrees.map(result => {
                        return this.clockbutt(result, true)
                    })}
                </View>
                <CircleButton title="+" func={this.add} size={60}></CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        //justifyContent: 'space-between',
        alignItems: 'center'
    },
    clock: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0
    },
    top: {
        height: (Dimensions.get('window').height - Dimensions.get('window').width) / 3,
        flexDirection: 'row'
    }
})
export default Add;