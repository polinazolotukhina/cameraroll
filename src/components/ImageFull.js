import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RaisedTextButton } from 'react-native-material-buttons';

class ImageFull extends Component {
    onBtnPress(img) {
        console.log('Click!', img);
        Actions.pop();
        Actions.pop();
    }
    render() {
        const { containerStyle, imgStyle, text } = styles;
        return (
            <View style={containerStyle}>
                <Image style={imgStyle} source={{ uri: this.props.data }} />
                <RaisedTextButton
                    title="Use this photo"
                    style={text}
                    onPress={() => this.onBtnPress(this.props.data)}
                />
            </View>
        );
    }
}
const styles = {
    containerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    imgStyle: {
        width: null,
        height: 200,
        flex: 15
    },
    text: {
        flex: 1
    }
};

export default ImageFull;
