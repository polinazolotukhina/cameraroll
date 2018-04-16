import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, CameraRoll } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, Spinner } from './common';

class Navbar extends Component {
    state = {
        photoArray: []
    };
    componentWillMount() {
        this.getPhotosFromGallery();
    }

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 1 }).then(res => {
            this.setState({
                photoArray: res.edges
            });
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={() => Actions.cameraScreen()}>
                <View style={styles.containerStyle}>
                    <View style={styles.cameraTextStyle}>
                        <Text style={styles.textStyle}>Camera Roll</Text>
                    </View>
                    <View style={styles.photoStyle}>
                        {this.state.photoArray.length > 0 ? (
                            <View>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{
                                        uri: this.state.photoArray[0].node.image
                                            .uri
                                    }}
                                />
                            </View>
                        ) : (
                            <Spinner />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    cameraTextStyle: {
        height: 50,
        alignSelf: 'stretch',
        flex: 4,
        alignItems: 'center'
    },
    photoStyle: {
        flex: 1,
        alignItems: 'center'
    },
    buttonStyle: {
        fontSize: 20
    },
    textStyle: {
        padding: 15,
        textAlign: 'center',
        width: null
    }
};

export default Navbar;
