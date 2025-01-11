import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />

      <ThemedView style={styles.container}>
        <ThemedText
          type="title"
          style={{ textAlign: "center", color: "#FF3507" }}
        >
          Oops!
        </ThemedText>
        <ThemedText
          type="title"
          style={{ textAlign: "center", marginTop: 7.5, fontSize: 24 }}
        >
          This screen doesn't exist.
        </ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link" style={{ color: "#FF3507" }}>
            Go to home screen!
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
