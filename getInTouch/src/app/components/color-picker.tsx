import { View, Text, StyleSheet } from "react-native";

export default function ColorPickerFallback() {
  return (
    <View style={styles.container}>
      <Text>Color picker is not supported on this platform.</Text>
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
