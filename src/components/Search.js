import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ScrollView, View } from 'react-native';
import * as actions from './../actions';
import ListMovie from './ListMovie';
import { Spinner, Input, CardSection } from './common';

class Search extends Component {
    constructor(props) {
        super(props);
        this.search('');
    }
    search = (e) => {
      const params = {};
      if (e !== '') {
        params.query = e;
      } else {
        params.query = '';
      }
      this.props.actions.getMovies(params, '/3/search/movie?');
    }

    render() {
        const { movies } = this.props;
        return (
          <View >
            <Input
                 placeholder="Search for movies..."
                 onChangeText={(e) => this.search(e)}

            />
            <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                <ListMovie movie={movies.data.results} />
            </ScrollView>
          </View >
        );
    }
}

Search.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { movies, isLoading, error } = state;
    return {
        movies,
        isLoading,
        error
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
)(Search);
