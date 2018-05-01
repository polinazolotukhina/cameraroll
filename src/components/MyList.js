import React, { Component } from 'react';
import { ScrollView, Image, TouchableHighlight, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './common';

class MyList extends Component {
    onImgPress(uri) {
        Actions.fullImage(uri);
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

export default MyList;
