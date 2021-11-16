
import React, { Component } from 'react';
import { Switch, View, Text, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from '../MyButton';
import AlarmList from '../AlarmList'




class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (


            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                onPress={() => console.log("pressed")}
                style={{
                    width: 100,
                    height: 100,
                }}
            >
                <View style={{ width: 100, height: 100, background: "red" }}>

                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default Main;