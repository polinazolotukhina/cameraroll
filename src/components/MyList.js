import React, { Component } from 'react';
import { ScrollView, Image, TouchableHighlight, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as actions from './../actions';
import { Card } from './common';

class MyList extends Component {
    onImgPress(uri) {
        this.props.actions.viewImg(uri);
        Actions.fullImage();
    }
    render() {
        return (
            this.props.uri && (
                <ScrollView>
                    <FlatList
                        numColumns={3}
                        data={this.props.uri}
                        renderItem={({ item }) => (
                            <Card>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.onImgPress(item.node.image.uri);
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 100,
                                            height: 100
                                        }}
                                        source={{ uri: item.node.image.uri }}
                                    />
                                </TouchableHighlight>
                            </Card>
                        )}
                    />
                </ScrollView>
            )
        );
    }
}
MyList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
