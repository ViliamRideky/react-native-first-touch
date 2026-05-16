import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Host } from "@expo/ui/swift-ui";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <ActivityIndicator size={"large"} />
      <Link href={"/about"}>Go to About screen</Link>
      <Host>
        <Button onPress={() => router.push("/about")}>
          <Text>Navigate</Text>
        </Button>
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
  image: {
    width: 200,
    height: 200,
  },
});
