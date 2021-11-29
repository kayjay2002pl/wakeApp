
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';






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