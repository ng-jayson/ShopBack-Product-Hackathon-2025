import React, { useRef } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Text,
  Animated,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";
import LocationBasedRecommendation from "@/components/home/LocationBasedVoucher";
import Recommendation from "@/components/home/Recommendation";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { IconSymbol } from "@/components/ui/IconSymbol";
import PopularCashback from "@/components/home/PopularCashback";

const filters = [
  "Plus+",
  "Travel",
  "ShopBack Play",
  "Payments",
  "Voucher",
  "Fashion",
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerColor = Colors[colorScheme ?? "light"].background;

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 75],
    outputRange: ["transparent", headerColor],
    extrapolate: "clamp",
  });

  const headerPadding = scrollY.interpolate({
    inputRange: [0, 75],
    outputRange: [60, 60],
    extrapolate: "clamp",
  });

  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor: headerBackgroundColor,
            paddingTop: headerPadding,
          },
        ]}
      >
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: Colors[colorScheme ?? "light"].card,
              flex: 1,
              marginRight: 12,
            },
          ]}
        >
          <IconSymbol
            size={20}
            name="magnifyingglass"
            color={Colors[colorScheme ?? "light"].secondaryText}
            style={styles.searchIcon}
          />
          <Text
            style={[
              styles.placeholderText,
              { color: Colors[colorScheme ?? "light"].secondaryText },
            ]}
          >
            Search for stores...
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: Colors[colorScheme ?? "light"].card,
            justifyContent: "center",
            alignItems: "center",
            ...Platform.select({
              ios: {
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
              },
              android: {
                elevation: 5,
              },
            }),
          }}
        >
          <IconSymbol
            size={20}
            name="bell"
            color={Colors[colorScheme ?? "light"].secondaryText}
          />
        </View>
      </Animated.View>
      <Animated.ScrollView
        style={{ flex: 1, marginBottom: "15%" }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <ThemedView style={{ position: "relative" }}>
          <Image
            source={require("@/assets/images/banner.png")}
            style={styles.headerBanner}
          />
        </ThemedView>

        <ThemedView
          style={[
            styles.homeContainer,
            { backgroundColor: Colors[colorScheme ?? "light"].homeContainer },
          ]}
        >
          <ThemedView
            style={[
              styles.newHere,
              { backgroundColor: Colors[colorScheme ?? "light"].card },
            ]}
          >
            <Image
              source={require("@/assets/images/splash-icon.png")}
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <ThemedText
                style={[
                  styles.title,
                  { color: Colors[colorScheme ?? "light"].text },
                ]}
              >
                Welcome
                <HelloWave />
              </ThemedText>
              <ThemedText
                style={[
                  styles.description,
                  { color: Colors[colorScheme ?? "light"].secondaryText },
                ]}
              >
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
                <View
                  key={index}
                  style={[
                    styles.filterItem,
                    {
                      backgroundColor: Colors[colorScheme ?? "light"].card,
                      borderColor: Colors[colorScheme ?? "light"].border,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      {
                        color: Colors[colorScheme ?? "light"].secondaryText,
                      },
                    ]}
                  >
                    {filter}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <PopularCashback />
          <LocationBasedRecommendation />
          <Recommendation />
        </ThemedView>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  inputContainer: {
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  searchIcon: {
    marginRight: 8,
  },
  placeholderText: {
    flex: 1,
    fontSize: 14,
  },
  newHere: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    gap: 24,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
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
    objectFit: "cover",
    width: "100%",
    backgroundColor: "#F6E360",
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
    borderWidth: 0.5,
    marginRight: 8,
  },
  filterText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
