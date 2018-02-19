import {Button, Text, View} from "react-native";
const Navigator = (props) => {
    const {navigate} = props.navigation;

    return (
        <View>
            <Text>
                Welcome to React Native Navigation Sample!
            </Text>
            <Button
                onPress={() => navigate('SecondScreen')}
                title="Go to Second Screen"
            />
        </View>
    )
};

export default Navigator;