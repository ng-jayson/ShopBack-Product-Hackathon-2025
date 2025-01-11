import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

export default function LocationBasedRecommendation() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.headerText,
          { color: Colors[colorScheme ?? "light"].text },
        ]}
      >
        It seems that you're at{" "}
        <Text style={styles.mallName}>ION Orchard!</Text>
      </Text>
      <View
        style={[
          styles.card,
          { backgroundColor: Colors[colorScheme ?? "light"].card },
        ]}
      >
        <Image
          source={require("@/assets/images/ion.png")}
          style={styles.mallImage}
        />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.mallTitle,
              { color: Colors[colorScheme ?? "light"].text },
            ]}
          >
            ION Orchard
          </Text>
          <Text
            style={[
              styles.voucherCount,
              { color: Colors[colorScheme ?? "light"].secondaryText },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            75 Vouchers Available
          </Text>
          <Text
            style={styles.savingsText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Save up to $500 with vouchers
          </Text>
        </View>
        <TouchableOpacity style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginTop: -40,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  mallName: {
    color: "#FF3507",
  },
  card: {
    flexDirection: "row",
    padding: 16,
    position: "relative",
    height: 101,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  mallImage: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 125,
    objectFit: "cover",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: "40%",
    justifyContent: "center",
  },
  mallTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  voucherCount: {
    fontSize: 12,
    marginBottom: 12,
  },
  savingsText: {
    fontSize: 10,
    color: "#999",
  },
  arrowContainer: {
    position: "absolute",
    right: 16,
    top: "50%",

    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: "#FF3507",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
