import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

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

const PopularCashback = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.cashbackSection}>
      <View style={styles.cashbackHeader}>
        <ThemedText
          style={[
            styles.cashbackTitle,
            { color: Colors[colorScheme ?? "light"].text },
          ]}
        >
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
            <Image source={{ uri: item.logo }} style={styles.cashbackIcon} />
            <Text
              style={[
                styles.cashbackItemName,
                { color: Colors[colorScheme ?? "light"].secondaryText },
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.cashbackItemValue,
                { color: Colors[colorScheme ?? "light"].text },
              ]}
            >
              {item.cashback}
            </Text>
          </View>
        )}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
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
  },
  cashbackItemValue: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginTop: 4,
  },
  cashbackIcon: {
    width: 40,
    height: 40,
  },
});

export default PopularCashback;
