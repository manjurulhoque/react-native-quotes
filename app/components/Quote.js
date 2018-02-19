import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    StyleSheet,
    Dimensions,
    Image, View
} from 'react-native';

class Quote extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
                <Text>- {this.props.author}</Text>
            </View>
        )
    }
}

Quote.protoTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    container: {
        // paddingRight: Dimensions.get('window').width - 30,
        margin: 20,
    }
});

export default Quote;