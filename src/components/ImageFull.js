import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actions from './../actions';

class ImageFull extends Component {
    render() {
        const { img } = this.props;
        return (
            img && <Image style={styles.imgStyle} source={{ uri: img.img }} />
        );
    }
}
const styles = {
    imgStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null
    }
};

ImageFull.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageFull);
