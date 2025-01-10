import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Text,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";
import LocationBasedRecommendation from "@/components/LocationBased";
import Recommendation from "@/components/Recommendation";

const filters = [
  "Plus+",
  "Travel",
  "ShopBack Play",
  "Payments",
  "Voucher",
  "Fashion",
];

const cashbackItems = [
  {
    logo: "https://lzd-img-global.slatic.net/g/tps/tfs/TB1e_.JhHY1gK0jSZTEXXXDQVXa-64-64.png",
    name: "Lazada",
    cashback: "Up to 25%",
  },
  {
    logo: "https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png",
    name: "Taobao",
    cashback: "Up to 7%",
  },
  {
    logo: "https://micro-assets.foodora.com/favicons/fp/apple-touch-icon-57x57.png",
    name: "Foodpanda",
    cashback: "Up to $1",
  },
  {
    logo: "https://sg.trip.com/trip.ico",
    name: "Trip.com",
    cashback: "Up to 5.5%",
  },
  {
    logo: "https://www.agoda.com/favicon.ico",
    name: "Agoda",
    cashback: "Up to 5.5%",
  },
  {
    logo: "https://www.shopback.sg/favicon.ico",
    name: "ShopBack Pay",
    cashback: "100%",
  },
  {
    logo: "https://cdn.klook.com/s/dist_web/favicons/favicon-32x32.png",
    name: "Klook SG",
    cashback: "Up to 20%",
  },
  {
    logo: "https://img.alicdn.com/tfs/TB1XlF3RpXXXXc6XXXXXXXXXXXX-16-16.png",
    name: "Tianmao",
    cashback: "Up to 5%",
  },
  {
    logo: "https://www.amazon.sg/favicon.ico",
    name: "Amazon.com",
    cashback: "Up to 10%",
  },
  {
    logo: "https://www.sephora.sg/assets/sephora/apple_touch_icon/touch-icon-ipad-retina-a2cd6e63fba84900399821cc61b4c48aeb400021ca94150fa8b93b6a3a97fb6e.png",
    name: "Sephora",
    cashback: "Up to 8%",
  },
  {
    logo: "https://cf.bstatic.com/static/img/apple-touch-icon/5db9fd30d96b1796883ee94be7dddce50b73bb38.png",
    name: "Booking.com",
    cashback: "5.5",
  },
  {
    logo: "https://www.nike.com/favicon.ico?v=1",
    name: "Nike",
    cashback: "Up to 5%",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, marginBottom: 80 }}>
      <Image
        source={require("@/assets/images/banner.png")}
        style={styles.headerBanner}
      />
      <ThemedView style={styles.homeContainer}>
        <ThemedView style={styles.newHere}>
          <Image
            source={require("@/assets/images/splash-icon.png")}
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <ThemedText style={styles.title}>
              Welcome
              <HelloWave />
            </ThemedText>
            <ThemedText style={styles.description}>
              New here? Start Earning Cashback
            </ThemedText>
          </View>
        </ThemedView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
        >
          <View style={styles.filterContainer}>
            {filters.map((filter, index) => (
              <View key={index} style={styles.filterItem}>
                <Text style={styles.filterText}>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <ThemedView style={styles.cashbackSection}>
          <View style={styles.cashbackHeader}>
            <ThemedText style={styles.cashbackTitle}>
              Click, Shop, Earn Cashback
            </ThemedText>
            <Text style={styles.seeMore}>See more</Text>
          </View>
          <FlatGrid
            horizontal
            data={cashbackItems}
            spacing={12}
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: 0, marginRight: -24, maxHeight: 280 }}
            renderItem={({ item }) => (
              <View style={styles.cashbackItem}>
                <Image
                  source={{ uri: item.logo }}
                  style={styles.cashbackIcon}
                />

                <Text
                  style={styles.cashbackItemName}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
                <Text style={styles.cashbackItemValue}>{item.cashback}</Text>
              </View>
            )}
          />
        </ThemedView>
        <LocationBasedRecommendation />
        <Recommendation />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  newHere: {
    backgroundColor: "#404040",
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    gap: 24,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  homeContainer: {
    flex: 1,
    gap: 20,
    flexDirection: "column",
    backgroundColor: "#202020",
    justifyContent: "flex-start",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: 1,
    marginTop: -12,
  },
  headerBanner: {
    height: 260,
    width: "100%",
    zIndex: 0,
  },
  icon: {
    height: 40,
    width: 24,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#ccc",
  },
  filterContainer: {
    flexDirection: "row",
    overflow: "hidden",
  },
  filterScroll: {
    flexDirection: "row",
    maxHeight: 32,
    overflow: "scroll",
    marginRight: -24,
  },
  filterItem: {
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 16,
    maxHeight: 32,
    backgroundColor: "#404040",
    borderWidth: 0.5,
    marginRight: 8,
    borderColor: "#666666",
  },
  filterText: {
    fontWeight: "bold",
    color: "#fff",
  },
  cashbackSection: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    gap: 12,
    backgroundColor: "transparent",
  },
  cashbackHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cashbackTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  seeMore: {
    fontSize: 14,
    color: "#FF3507",
  },
  cashbackItem: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cashbackItemName: {
    fontSize: 14,
    marginTop: 8,
    width: 80,
    textAlign: "center",
    color: "#ccc",
  },
  cashbackItemValue: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginTop: 4,
    color: "#fff",
  },
  cashbackIcon: {
    width: 40,
    height: 40,
  },
});
