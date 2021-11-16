
import React, { Component } from 'react';
import { Switch, View, Text, PropTypes, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from '../MyButton';




class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <View style={styles.main}></View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default Add;