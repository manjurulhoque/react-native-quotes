import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    ImageBackground,
    Image, View
} from 'react-native';
import Quote from "../components/Quote";
const quotes = require('../../quotes.json');
const bg = require('../../assets/images/bg.jpg');
import Swiper from 'react-native-swiper';

class QuoteScreen extends Component {

    render() {
        const quote = quotes['quotes'][2];
        return (
            <Swiper style={styles.container}>
                <View style={styles.slider}>
                    <Quote text={quotes['quotes'][0].quoteText} author={quotes['quotes'][0].quoteAuthor}/>
                    <Image source={bg} style={styles.backgroundContainer}/>
                </View>
                <View style={styles.slider}>
                    <Image source={bg} style={styles.backgroundContainer}/>
                    <Quote text={quotes['quotes'][1].quoteText} author={quotes['quotes'][1].quoteAuthor}/>
                </View>
                <View style={styles.slider}>
                    <Image source={bg} style={styles.backgroundContainer}/>
                    <Quote text={quotes['quotes'][2].quoteText} author={quotes['quotes'][2].quoteAuthor}/>
                </View>
                <View style={styles.slider}>
                    <Image source={bg} style={styles.backgroundContainer}/>
                    <Quote text={quotes['quotes'][3].quoteText} author={quotes['quotes'][3].quoteAuthor}/>
                </View>
                <View style={styles.slider}>
                    <Image source={bg} style={styles.backgroundContainer}/>
                    <Quote text={quotes['quotes'][4].quoteText} author={quotes['quotes'][4].quoteAuthor}/>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6dd4e5',
    },
    backgroundContainer: {
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
    },
});


export default QuoteScreen;