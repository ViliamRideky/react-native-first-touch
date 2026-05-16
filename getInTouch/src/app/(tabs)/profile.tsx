import { Host } from "@expo/ui/swift-ui";
import { View, StyleSheet } from "react-native";
import ColorPickerIOS from "../components/color-picker.ios";
import { Platform } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Host>{Platform.OS === "ios" && <ColorPickerIOS />}</Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
