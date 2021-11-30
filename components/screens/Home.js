
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Database from "../Database";






class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        Database.createTable();
        this.props.navigation.navigate("Main")
    }
    componentDidMount() {

        Database.createTable();
        Database.removeAll();

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