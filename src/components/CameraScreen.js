import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { RaisedTextButton } from 'react-native-material-buttons';
import { View, CameraRoll } from 'react-native';
import * as actions from './../actions';
import ViewPhotos from './ViewPhotos';

class CameraScreen extends Component {
    state = {
        showPhotoGallery: false,
        photoArray: []
    };

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 1000000 }).then(res => {
            console.log(res.edges, 'images data');
            this.setState({ showPhotoGallery: true, photoArray: res.edges });
        });
    }

    render() {
        if (this.state.showPhotoGallery) {
            return <ViewPhotos photoArray={this.state.photoArray} />;
        }
        return (
            <View style={styles.container}>
                <RaisedTextButton
                    title="Photos"
                    titleStyle={styles.buttonStyle}
                    style={styles.textStyle}
                    onPress={() => this.getPhotosFromGallery()}
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
CameraScreen.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const { movies } = state;
    return {
        movies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);
