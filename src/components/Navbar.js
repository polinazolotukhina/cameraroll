import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, CameraRoll } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Spinner } from './common';

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
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={() => Actions.cameraScreen()}>
                    <View style={styles.rowStyle}>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.textStyle}>Camera Roll</Text>
                        </View>
                        <View>
                            {this.state.photoArray.length > 0 ? (
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={{
                                            uri: this.state.photoArray[0].node
                                                .image.uri
                                        }}
                                    />
                                </View>
                            ) : (
                                <Spinner />
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.makePhoto()}>
                    <View style={styles.rowStyle}>
                        <Text style={styles.textStyle}>Take a photo</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        marginTop: 2
    },
    textStyle: {
        padding: 15,
        fontSize: 18
    },
    imageStyle: {
        width: 68,
        height: 68,
        margin: 15
    }
};

export default Navbar;
