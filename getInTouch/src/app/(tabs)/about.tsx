import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About screen with image</Text>
      <Image
        source={{
          uri: "https://fastly.picsum.photos/id/974/200/300.jpg?hmac=QEuRqsjG8spkqu72dWfkl4m-kSl5p-CEfHgx9dnnZLo",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
