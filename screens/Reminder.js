import React, { Component } from 'react';
import {Alert, Button, StyleSheet, Text, View } from 'react-native';
export default class Reminder extends Component {
    render() {
        return (
            <View>
            <Text >Reminder</Text>
            <View>
                <Text>Ofloxacin</Text>
                <Text> 1 drop</Text>
            </View>
            <View >
                <View >
                <Button  title="Snooze"/>
                </View>
                <View >
                <Button  title="Done"/>
                </View>
            </View>
            </View>
        );
    }
}