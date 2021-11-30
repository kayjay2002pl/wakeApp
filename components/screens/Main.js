
import React, { Component } from 'react';
import { Switch, View, Text, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from '../MyButton';
import AlarmList from '../AlarmList'
import Alarm from '../Alarm';
import Database from "../Database";
import CircleButton from '../CircleButton';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alarms: []
        };
        this.add = this.add.bind(this)
    }
    componentDidMount() {
        //Database.add();
        Database.getAll().then((all) => {

            //console.log(JSON.parse(all))

            var x = JSON.parse(all)
            console.log(x.rows._array[0]);
            this.setState({ alarms: x.rows._array })
            console.log(this.state.alarms);
        })
    }
    add() {
        Database.add();
        Database.getAll().then((all) => {

            //console.log(JSON.parse(all))

            var x = JSON.parse(all)
            console.log(x.rows._array[0]);
            this.setState({ alarms: x.rows._array })
            console.log(this.state.alarms);
        })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#FF5722" }}>
                <ScrollView style={{ width: "80%" }}><AlarmList></AlarmList></ScrollView>
                <CircleButton title="+" func={this.add} size={60}></CircleButton>
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