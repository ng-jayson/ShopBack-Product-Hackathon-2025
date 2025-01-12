import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Text,
  Animated,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import vouchers from "@/constants/Vouchers";

const filters = [
  "Plus+",
  "Travel",
  "ShopBack Play",
  "Payments",
  "Voucher",
  "Fashion",
];

const sortingOptions = ["Latest", "Popular", "Ending Soon", "Cashback"];

export default function LocationBasedScreen() {
  const [text, onChangeText] = React.useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedSorting, setSelectedSorting] = useState<string | null>(null);
  const colorScheme = useColorScheme();
  const scrollY = useRef(new Animated.Value(0)).current;

  const parseDateString = (dateStr: string): Date => {
    const monthNames: { [key: string]: number } = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    const [month, day, year] = dateStr.replaceAll(",", "").split(" ");
    const monthIndex = monthNames[month as keyof typeof monthNames];

    if (monthIndex === undefined) {
      throw new Error(`Invalid month name: ${month}`);
    }

    const formattedMonth = (monthIndex + 1).toString().padStart(2, "0");
    const formattedDay = day.padStart(2, "0");
    const date = new Date(Number(year), monthIndex, Number(formattedDay));
    return date;
  };

  const filteredVouchers = vouchers
    .filter((voucher) => {
      const matchesSearch = text
        ? voucher.store.toLowerCase().includes(text.toLowerCase())
        : true;
      const matchesFilter = selectedFilter
        ? voucher.filterTags.includes(selectedFilter)
        : true;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (!selectedSorting) return 0;
      if (selectedSorting === "Latest") return b.createdAt - a.createdAt;
      if (selectedSorting === "Ending Soon")
        return (
          parseDateString(a.validity).getTime() -
          parseDateString(b.validity).getTime()
        );

      if (selectedSorting === "Popular")
        return (
          (b.sortCriteria.popular ? 1 : 0) - (a.sortCriteria.popular ? 1 : 0)
        );
      if (selectedSorting === "Cashback")
        return (
          (b.sortCriteria.cashback ? 1 : 0) - (a.sortCriteria.cashback ? 1 : 0)
        );
      return 0;
    });

  return (
    <>
      <Animated.View style={[styles.header]}>
        <Link href="/(tabs)">
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
              name="arrow.left"
              color={Colors[colorScheme ?? "light"].secondaryText}
            />
          </View>
        </Link>
      </Animated.View>
      <Animated.ScrollView
        style={{ flex: 1, marginBottom: "19%" }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <ThemedView style={{ position: "relative" }}>
          <Image
            source={require("@/assets/images/ion-banner.png")}
            style={styles.headerBanner}
          />
          <View
            style={{
              borderRadius: 20,
              top: 135,
              left: 20,
              backgroundColor: "#FF3507",
              flexDirection: "row",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 12,
              height: 40,
            }}
          >
            <IconSymbol size={20} name="location" color="#fff" />
            <ThemedText
              style={{
                color: "#fff",
                fontSize: 14,
                marginLeft: 6,
              }}
            >
              ION Orchard
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedView
          style={[
            styles.locationContainer,
            { backgroundColor: Colors[colorScheme ?? "light"].homeContainer },
          ]}
        >
          <View style={{ position: "relative" }}>
            <TextInput
              style={[
                styles.input,
                {
                  // borderColor: Colors[colorScheme ?? "light"].border,
                  color: Colors[colorScheme ?? "light"].text,
                  backgroundColor: Colors[colorScheme ?? "light"].card,
                },
              ]}
              onChangeText={onChangeText}
              value={text}
              placeholder="Search for stores..."
            />
            <IconSymbol
              size={20}
              name="magnifyingglass"
              style={styles.searchIcon}
              color={Colors[colorScheme ?? "light"].secondaryText}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 20,
              marginBottom: 12,
              marginTop: -8,
            }}
          >
            <Text
              style={{
                color: Colors[colorScheme ?? "light"].text,
                fontSize: 12,
              }}
            >
              Sort by
            </Text>
            {sortingOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  setSelectedSorting(selectedSorting === option ? null : option)
                }
              >
                <Text
                  style={{
                    color:
                      selectedSorting === option
                        ? "#FF3507"
                        : Colors[colorScheme ?? "light"].secondaryText,
                    fontSize: 12,
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
          >
            <View style={styles.filterContainer}>
              {filters.map((filter, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    setSelectedFilter(selectedFilter === filter ? null : filter)
                  }
                  style={[
                    styles.filterItem,
                    {
                      borderColor:
                        selectedFilter === filter
                          ? "#FF3507"
                          : Colors[colorScheme ?? "light"].border,
                      backgroundColor: Colors[colorScheme ?? "light"].card,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      {
                        color:
                          selectedFilter === filter
                            ? "#FF3507"
                            : Colors[colorScheme ?? "light"].secondaryText,
                      },
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <View
            style={{
              flexDirection: "column",
              flex: 1,
              gap: 16,
              marginTop: 20,
            }}
          >
            {filteredVouchers.map((voucher, index) => (
              <Link key={index} href={`/(topographical)`}>
                <View
                  style={[
                    styles.card,
                    {
                      backgroundColor: Colors[colorScheme ?? "light"].card,
                      // borderColor: Colors[colorScheme ?? "light"].border,
                      // borderWidth: 1,
                    },
                  ]}
                >
                  <Image
                    source={require("@/assets/images/icon.png")}
                    style={styles.storeImage}
                  />
                  <View style={styles.textContainer}>
                    <Text
                      style={[
                        styles.voucherCount,
                        {
                          color: Colors[colorScheme ?? "light"].secondaryText,
                          fontSize: 16,
                          marginBottom: 0,
                        },
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {voucher.store}
                    </Text>
                    <Text
                      style={[
                        styles.storeTitle,
                        { color: Colors[colorScheme ?? "light"].text },
                      ]}
                    >
                      {voucher.discount}
                    </Text>
                    <Text
                      style={[
                        styles.voucherCount,
                        { color: Colors[colorScheme ?? "light"].secondaryText },
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      Min. spend {voucher.minSpend}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <IconSymbol
                        size={12}
                        name="calendar"
                        color={Colors[colorScheme ?? "light"].secondaryText}
                      />
                      <Text
                        style={styles.savingsText}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        Valid until {voucher.validity}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.useContainer}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#fff",
                        textAlign: "center",
                        width: "100%",
                        marginBottom: 3,
                        fontWeight: "bold",
                      }}
                    >
                      Use
                    </Text>
                  </TouchableOpacity>
                </View>
              </Link>
            ))}
          </View>

          {filteredVouchers.length === 0 && (
            <ThemedView style={{ padding: 60 }}>
              <Image
                source={require("@/assets/images/voucher.png")}
                style={{ width: 126, height: 103, alignSelf: "center" }}
              />
              <ThemedText
                type="title"
                style={{ textAlign: "center", marginTop: 7.5, fontSize: 24 }}
              >
                No results found.
              </ThemedText>
              <ThemedText
                type="link"
                style={{
                  color: Colors[colorScheme ?? "light"].text,
                  alignSelf: "center",
                  textAlign: "center",
                  fontSize: 14,
                  lineHeight: 18,
                  marginBottom: 40,
                  marginTop: 8,
                }}
              >
                Hmm.. It looks like we don’t have vouchers for that right now.
              </ThemedText>
              <TouchableOpacity
                onPress={() => {
                  onChangeText("");
                  setSelectedFilter(null);
                  setSelectedSorting(null);
                }}
              >
                <ThemedText
                  type="link"
                  style={{ color: "#FF3507", alignSelf: "center" }}
                >
                  Try another store
                </ThemedText>
              </TouchableOpacity>
            </ThemedView>
          )}
        </ThemedView>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    position: "relative",
    height: 101,
    borderRadius: 12,
  },
  storeImage: {
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
  storeTitle: {
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
  useContainer: {
    position: "absolute",
    right: 16,
    width: 40,
    bottom: 8,
    height: 24,
    borderRadius: 20,
    backgroundColor: "#FF3507",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  input: {
    borderRadius: 20,
    width: "100%",
    height: 40,
    borderWidth: 1,
    paddingRight: 16,
    paddingLeft: 40,
  },
  header: {
    position: "absolute",
    top: 60,
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
  searchIcon: {
    top: -30,
    left: 13,
  },
  locationContainer: {
    flex: 1,
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
    marginTop: -52,
  },
  headerBanner: {
    objectFit: "cover",
    width: "100%",
    zIndex: 0,
  },
  icon: {
    height: 40,
    width: 24,
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
