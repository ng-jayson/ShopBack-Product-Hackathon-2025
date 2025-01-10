import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function LocationBasedRecommendation() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        It seems that you're at{" "}
        <Text style={styles.mallName}>ION Orchard!</Text>
      </Text>
      <View style={styles.card}>
        <Image
          source={require("@/assets/images/ion.png")}
          style={styles.mallImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.mallTitle}>ION Orchard</Text>
          <Text
            style={styles.voucherCount}
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
            Save up to $500 with available vouchers
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
    color: "#fff",
    marginBottom: 12,
  },
  mallName: {
    color: "#FF3507",
  },
  card: {
    flexDirection: "row",
    padding: 16,
    position: "relative",
    backgroundColor: "#404040",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: "hidden",
  },
  mallImage: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 125,
    height: 101,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: "38%",
    justifyContent: "center",
  },
  mallTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  voucherCount: {
    fontSize: 12,
    color: "#ccc",
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
