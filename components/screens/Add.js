
import React, { Component } from 'react';
import { Switch, View, Text, PropTypes, StyleSheet, Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from '../MyButton';
import CircleButton from "../CircleButton"
import Database from '../Database';



class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            degrees: [0, 0.52, 1.05, 1.57, 2.09, 2.61, 3.13, 3.65, 4.17, 4.69, 5.21, 5.73]

        };
        this.add = this.add.bind(this)
        this.nothing = this.nothing.bind(this)
    }
    add() {
        Database.add();
        this.props.navigation.navigate("Main")
    }
    nothing() {
        console.log("abs");
    }
    clockbutt(rad) {
        var text = Math.floor(rad / 0.52) + 1 + ""
        return <View style={{
            position: 'absolute',
            left: 45 + (40 * Math.cos(rad)) + "%",
            top: 45 + (40 * Math.sin(rad)) + "%",


        }} ><CircleButton title={text} func={this.nothing} size={40}></CircleButton></View>
    }

    render() {
        return (

            <View style={styles.main} >
                <View></View>
                <View style={styles.clock}>
                    {this.state.degrees.map(result => {
                        return this.clockbutt(result)
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
        justifyContent: 'space-between'
    },
    clock: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    }
})
export default Add;