import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RaisedTextButton } from 'react-native-material-buttons';
import { Card } from './common';

class Navbar extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={() => Actions.cameraScreen()}>
                    <View style={styles.cameraRollStyle}>
                        <Text style={styles.textStyle}>Camera Roll</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = {
    cameraRollStyle: {
        height: 400,
        backgroundColor: 'blue',
        alignSelf: 'stretch'
    },
    buttonStyle: {
        fontSize: 20
    },
    textStyle: {
        padding: 15,
        textAlign: 'center',
        width: null
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
};

export default Navbar;
