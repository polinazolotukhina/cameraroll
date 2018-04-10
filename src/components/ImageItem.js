import React, { Component } from 'react';
import { View, ListView, Text, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actions from './../actions';
import { Card } from './common';

class ImageItem extends Component {
    onImgPress(uri) {
        this.props.actions.viewImg(uri);
        Actions.fullImage();
    }
    render() {
        return (
            this.props.image && (
                <Card>
                    <TouchableHighlight
                        onPress={() => {
                            this.onImgPress(this.props.image.node.image.uri);
                        }}
                    >
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={{ uri: this.props.image.node.image.uri }}
                        />
                    </TouchableHighlight>
                </Card>
            )
        );
    }
}
const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
};
ImageItem.propTypes = {
    actions: PropTypes.object.isRequired,
    img: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const { img } = state;
    return {
        img
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageItem);
