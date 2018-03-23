import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { RaisedTextButton } from 'react-native-material-buttons';
import * as actions from './../actions';

class ListItem extends Component {
    componentWillMount = () => {
        this.props.actions.favouritesFetch();
    };
    componentWillUpdate() {
        LayoutAnimation.configureNext(CustomLayoutSpring);
   }
    movieInfo = (movieId, selectedId) => {
        const { selectedMovie } = this.props.movies;
        if (movieId === selectedId) {
            return (
                <View>
                    <Text style={styles.paragraphStyle}>{selectedMovie.overview}</Text>
                    <Text style={styles.paragraphStyle}>Release Day:{selectedMovie.release_date}</Text>
                    <Text style={styles.paragraphStyle}>Rating: {selectedMovie.vote_average}</Text>
                    {this.renderButton(selectedMovie)}

                </View>
            );
        } return (<Text style={styles.paragraphStyle}>More...</Text>);
    }
    renderButton = (m) => {
        return (<RaisedTextButton
                    title='Save To Favourites'
                    onPress={() => { this.props.actions.toggleFavourites(m); }}
                />);
    };
    render() {
        const { movie, movies } = this.props;
        return (
            <View>
                    {
                      movie && movie.map((item, index) =>
                        <View key={index} style={styles.containerStyle}>
                            <Text style={styles.paragraphStyle}>{item.title}</Text>
                            <TouchableOpacity
                                 style={styles.TouchableOpacityStyle}
                                 onPress={() => { this.props.actions.selectMovie(item); }}
                            >
                            <Image
                                 source={{ uri: `https://image.tmdb.org/t/p/w342${item.backdrop_path}` }}
                                 style={styles.imgStyle}
                            />


                                { movies.selectedMovie ?
                                    (this.movieInfo(item.id, movies.selectedMovie.id)
                                    ) : (
                                        <View style={{ flexDirection: 'column', height: 40, justifyContent:'center' }}>
                                            <Text style={{ textAlign: 'left', paddingLeft: 10,  }}>More...</Text>
                                        </View>
                                        )
                                }
                            </TouchableOpacity>
                        </View>)
                    }
            </View>

        );
    }
}
const styles = {
    TouchableOpacityStyle: {
        backgroundColor: '#e0e0e0',
        borderColor: '#afafaf',
        borderRadius: 4,
        borderWidth: 1,
        alignSelf: 'stretch'

    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10,
    },
    imgStyle: {
        height: 250,
    },
    paragraphStyle: {
        padding: 10,
        fontSize: 20
    }
};

const CustomLayoutSpring = {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
    },
  };

ListItem.propTypes = {
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
)(ListItem);
