import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Image,
    TouchableHighlight,
    ListView
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as actions from './../actions';
import { Card } from './common';

class List extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState({
            dataSource: ds.cloneWithRows(this.props.uri)
        });
    }
    onImgPress(uri) {
        this.props.actions.viewImg(uri);
        Actions.fullImage();
    }
    render() {
        return (
            this.props.uri && (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={rowData => (
                        <Card>
                            <TouchableHighlight
                                onPress={() => {
                                    this.onImgPress(rowData);
                                }}
                            >
                                <Image
                                    style={{ width: 250, height: 250 }}
                                    source={{ uri: rowData }}
                                />
                            </TouchableHighlight>
                        </Card>
                    )}
                />
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
List.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
