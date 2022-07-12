import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? 
    <StatusBar barStyle={"light-content"} animated={true} {...props} /> : null;
};

export default FocusedStatusBar;

