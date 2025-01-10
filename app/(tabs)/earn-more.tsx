import { Link } from "expo-router";
import { StyleSheet, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function EarnMoreScreen() {
  return (
    <>
      <ThemedView style={styles.container}>
        <Image
          source={require("@/assets/images/splash-icon.png")}
          style={styles.shopbackIcon}
        />
        <ThemedText type="title" style={styles.title}>
          This screen doesn't exist due to prototyping purposes
        </ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link" style={styles.linkText}>
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
  shopbackIcon: {
    width: 50,
    height: 100,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: "#FF3507",
    fontSize: 16,
    fontWeight: "500",
  },
});
