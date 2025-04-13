import * as React from "react";
import { useEffect, useState } from "react";
import { addOnActiveListener, addOnInactiveListener } from "./index";
import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export type Props = {
  overlayColor: ColorValue;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>
};

// const NativeView: React.ComponentType<Props> = requireNativeViewManager("ScreenshotPreventer");

export default function ScreenshotPreventerView({ overlayColor = "#111", children, style }: Props) {
  let [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const subscription = addOnInactiveListener(() => {
      setIsVisible(false);
    });

    const subscription1 = addOnActiveListener(() => {
      setIsVisible(true);
    });

    return () => {
      subscription.remove();
      subscription1.remove();
    };
  }, []);

  return (
    <View style={[{flex: 1}, style]}>
      {isVisible ? children : <View style={{backgroundColor: overlayColor, ...StyleSheet.absoluteFillObject, zIndex: 999}} />}
    </View>
  );
}