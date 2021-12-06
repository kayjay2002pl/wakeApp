
import React, { Component } from 'react';
import { Switch, View, Text, PropTypes, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import MyButton from './MyButton';
import Alarm from './Alarm'
import Database from "./Database";



class AlarmList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alarms: []
        };
        this.delete = this.delete.bind(this)
        this.update = this.update.bind(this)

    }
    componentDidMount() {
        //Database.add()
        Database.getAll().then((all) => {

            //console.log(JSON.parse(all))

            var x = JSON.parse(all)
            console.log(x.rows._array[0]);
            this.setState({ alarms: x.rows._array })
            console.log(this.state.alarms);
        })
    }
    update(id, which, val) {
        console.log(id, which, val);
        Database.update(id, which, val);
    }
    delete(ida) {
        console.log("działam");
        var filtered = this.state.alarms.filter(function (el) { return el.id != ida; });
        this.setState({ alarms: filtered })
        Database.remove(ida)
    }

    render() {

        console.log("HAHAHAH");
        return (
            <View>
                {
                    this.state.alarms.map(a => {
                        var tab = { pn: a.pn, wt: a.wt, sr: a.sr, cz: a.cz, pt: a.pt, sb: a.sb, nd: a.nd }
                        return <Alarm toggle={a.state} days={tab} id={a.id} delete={this.delete} update={this.update} time={a.time}></Alarm>
                    })
                }

            </View >
        )
    }
}
/**/

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default AlarmList;