
import React, { Component } from 'react';
import { Switch, View, Text, PropTypes, StyleSheet, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from '../MyButton';





class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.navigation.navigate("Main")
    }

    render() {
        return (
            <TouchableOpacity style={styles.main} onPress={this.handleClick}>
                <View style={styles.main}></View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default Home;