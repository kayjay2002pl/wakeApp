
import React, { Component } from 'react';
import { Switch, View, Text, PropTypes, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from './MyButton';




class AlarmList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <View>

                {
                    //tutaj renderuje się tablica obiektów klasy <ListItem />
                }

            </View >
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default AlarmList;