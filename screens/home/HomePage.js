import React from "react";
import { Text, View } from "react-native";

class HomePage extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>Home page</Text>
            </View>
        );
    }
}

export default HomePage;