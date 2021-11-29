
import React, { Component } from 'react';
import { Switch, View, Text, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from '../MyButton';
import AlarmList from '../AlarmList'
import Alarm from '../Alarm';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#FF5722" }}>
                <View style={{ width: "80%" }}><Alarm></Alarm></View>

            </View>



        )
    }
}
/*<TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('rgba(122,255,255,1)', true)}
                    onPress={() => console.log("pressed")}
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "blue"
                    }}
                >
                    <View style={{ width: 100, height: 100, backgroundColor: "red" }}>

                    </View>

                </TouchableNativeFeedback>*/
const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default Main;