import React, { Component } from 'react';
import { View, CameraRoll } from 'react-native';
import MyList from './MyList';

class ChooseImg extends Component {
    state = {
        photoArray: []
    };
    componentWillMount() {
        this.getPhotosFromGallery();
    }

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 1000000 }).then(res => {
            this.setState({
                photoArray: res.edges
            });
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.state.photoArray.length > 0 && (
                    <MyList uri={this.state.photoArray} />
                )}
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
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default ChooseImg;
