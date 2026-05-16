import { ColorPicker, Host } from "@expo/ui/swift-ui";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function ColorPickerIOS() {
  const [color, setColor] = useState("#FF4325");

  return (
    <View style={styles.container}>
      <Host>
        <ColorPicker selection={color} onSelectionChange={setColor} />
      </Host>
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
