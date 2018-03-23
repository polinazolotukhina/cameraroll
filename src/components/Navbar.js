import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RaisedTextButton } from 'react-native-material-buttons';

class Navbar extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text> hello, lets do map </Text>
                <RaisedTextButton
                    title="Popular  Movies"
                    titleStyle={styles.buttonStyle}
                    style={styles.textStyle}
                    onPress={() => Actions.popularMovies()}
                />
                <RaisedTextButton
                    title="Photos"
                    titleStyle={styles.buttonStyle}
                    style={styles.textStyle}
                    onPress={() => Actions.cameraScreen()}
                />
            </View>
        );
    }
}
const styles = {
    buttonStyle: {
        fontSize: 20
    },
    textStyle: {
        padding: 15,
        width: 300,
        height: 60
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
};

export default Navbar;
