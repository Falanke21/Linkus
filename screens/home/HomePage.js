import React from "react";
import { Text, View, StatusBar } from "react-native";
import Carousel from "react-native-banner-carousel";
import { StyleSheet, Image, Dimensions } from "react-native";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 260;

const images = [
  "https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg",
  "https://images.dailyhive.com/20180807073521/shutterstock_450746794.jpg",
  "https://www.daniels.utoronto.ca/sites/default/files/styles/standard_image_3_col/public/pages/uoft_uc-east_300dpi.jpg"
];

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: "首页"
    //header: null,
  };

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          source={{ uri: image }}
        />
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "top"
        }}
      >
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
          justifyContent="center"
          flex={1}
        />

        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}
        >
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    );
  }
}
