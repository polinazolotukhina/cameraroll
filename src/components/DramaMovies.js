import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ScrollView, View } from 'react-native';
import * as actions from './../actions';
import ListMovie from './ListMovie';
import { Spinner } from './common';

class DramaMovies extends Component {
    componentWillMount = () => {
        const params = {
            'with_genres': '18',
            'sort_by': 'vote_average.desc',
            'vote_count.gte':'10'
        };
        this.props.actions.getMovies(params, '/3/discover/movie?');
    };
    render() {
        const { movies } = this.props;
        return (
            <View>
            {
                (movies.isLoading) ? (<Spinner />):(
                    <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                        <ListMovie movie={movies.data.results} />
                    </ScrollView>
                )
            }
            </View>


        );
    }
}
DramaMovies.propTypes = {
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
)(DramaMovies);
