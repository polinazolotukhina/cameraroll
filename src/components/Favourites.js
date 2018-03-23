import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { ScrollView, View, Text } from 'react-native';
import * as actions from './../actions';
import ListMovie from './ListMovie';
import { Spinner } from './common';

class Favourites extends Component {
    componentWillMount = () => {
        this.props.actions.favouritesFetch();
    };
    render() {
        const { favourites } = this.props.movies;
        // let fav = [];
        // favourites&&Object.keys(favourites).forEach(key => {
        //   favourites[key]['id'] = key;
        //   fav.push(favourites[key]);
        // });
        return (
            <View>
                    <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                        <ListMovie movie={Object.values(favourites)} />
                    </ScrollView >
            </View>


        );
    }
}
Favourites.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { movies } = state;
    return {
        movies,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favourites);
