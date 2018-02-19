import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, Button
} from 'react-native';
import Quote from './app/components/Quote';

const zenImage = require('./assets/images/zen.png');
const quotes = require('./quotes.json');

export default class App extends Component<Props> {
    // this is for header
    // static navigationOptions = {
    //     title: 'Home',
    //     header: null
    // };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Quote')}>
                    <Image source={zenImage} style={styles.buttonImage}/>
                </TouchableOpacity>
                <Text style={styles.readyText} onPress={() => alert(quotes['quotes'][2].quoteText)}>
                    I am ready to relax
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#859a9b',
    },
    readyText: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#ffffff'
    },
    button: {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    buttonImage: {
        width: 200,
        height: 200
    }
});
