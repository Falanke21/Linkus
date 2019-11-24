import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileBackground: {
    flex: 1,
    flexDirection: "column"
  },
  profileSettingView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  profileBasicInfoView: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  profileImageView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  profileNameView: {
    flex: 5,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  profileBottomSection: {
    flex: 9,
    alignItems: "center",
    //justifyContent: 'center',
    flexDirection: "column",
    width: "100%",
    padding: 10
  },
  profieItemListContainer: {
    flex: 6,
    flexDirection: "column",
    //justifyContent: 'space-around',
    //borderBottomWidth: 1,
    width: "100%"
  },
  profileListItem: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "rgb(245, 221, 133)",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderTopWidth: 1,
    borderColor: "white",
    borderStyle: "dashed",
    borderRadius: 5
  },
  profileItemView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgb(241, 112, 16)",
    borderRadius: 5
  },
  profileNameFont: {
    fontSize: 24,
    color: "rgb(241, 112, 16)"
  },
  profileItemFont: {
    fontSize: 18
  }
});
