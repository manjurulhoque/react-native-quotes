import {AppRegistry} from 'react-native';
import App from './App';
import QuoteScreen from "./app/screens/QuoteScreen";
import {StackNavigator} from "react-navigation";

const Navigator = StackNavigator({
    Home: {screen: App},
    Quote: {screen: QuoteScreen},

}, {headerMode: 'none'});

AppRegistry.registerComponent('RelaxationStation', () => Navigator);
