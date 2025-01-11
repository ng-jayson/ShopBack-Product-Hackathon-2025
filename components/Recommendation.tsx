import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

const items = [
  {
    logo: "https://cloud.shopback.com/c_scale,c_auto,q_70,f_webp/media-production-aps1/47_sUavGa6M/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vZGlyZWN0L0VHQnFwQVo1T2U5MTg5VkROSi9yZXF1ZXN0cy8wMDAvMDU2LzI4Mi80NjQvM0JlMlBYa1ZBUTQzMHlFTTZtNzhqMW9OYS84ZGU1OTI2YWJjMzQ1OWQ1MmRjNmQyNTI3OTVlYmYyY2IxM2I2NDRlLnBuZw.jpg",
    name: "Expedia",
    cashback: "Up to $75",
  },
  {
    logo: "https://cloud.shopback.com/c_scale,c_auto,q_70,f_webp/media-production-aps1/IzA1njGF3nU/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vZGlyZWN0L0VHQnFwQVo1T2U5MTg5VkROSi9yZXF1ZXN0cy8wMDAvMDU1Lzc5NC8wMjQvRHFSMnYxa05hWU1WMEQ1R3o4ZXBack9XUC9hOWNlNGM4ZjM0ZmRiZmIxZmNiMjFlOGI3NGJhZDcwY2E3ZWE0NjIwLnBuZw.jpg",
    name: "Emirates",
    cashback: "1%",
  },
  {
    logo: "https://cloud.shopback.com/c_scale,c_auto,q_70,f_webp/media-production-aps1/tl6wbTZKzSg/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vZGlyZWN0L0VHQnFwQVo1T2U5MTg5VkROSi9yZXF1ZXN0cy8wMDAvMDU2LzI4OS8wMDAvTmdMMzBhbU1PWWVsM3hXa1Fwckp4Qm95ZS9kZmExNjY5YzQ2YWRhM2E4OTZjYjI2OTg4MDg5ZmFjOTIyYjBkNmE0LnBuZw.jpg",
    name: "Uniqlo",
    cashback: "2%",
  },
  {
    logo: "https://cloud.shopback.com/c_scale,c_auto,q_70,f_webp/media-production-aps1/DBMgqqPp5wc/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vZGlyZWN0L0VHQnFwQVo1T2U5MTg5VkROSi9yZXF1ZXN0cy8wMDAvMDU2LzI4OS8zMjAvM0JlMlBYa1ZBUTQzMG9uajZtNzhqMW9OYS81OWE4N2YwOWUzMDI4NTBlZWQyZmM3MGI3NWE1NDBmODc1ZDFiYjQ2LnBuZw.jpg",
    name: "Shein",
    cashback: "Up to 5%",
  },
  {
    logo: "https://cloud.shopback.com/c_scale,c_auto,q_70,f_webp/media-production-aps1/l8TVlp-bQk4/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vZGlyZWN0L0VHQnFwQVo1T2U5MTg5VkROSi9yZXF1ZXN0cy8wMDAvMDU2LzI4MC85MDYva1c3eXY5ZUJkenBqUjF2clFOTFJ3YTVQeC84MzBjNmExNzhiZjZhMGZlNzQwOTk3ZDZmOTM2N2RlMzFmZjQ1MzRmLnBuZw.jpg",
    name: "FairPrice",
    cashback: "Up to 10%",
  },
  {
    logo: "https://cloud.shopback.com/c_scale,c_auto,q_70,f_webp/media-production-aps1/odDTzH5WyYY/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vZGlyZWN0L0VHQnFwQVo1T2U5MTg5VkROSi9yZXF1ZXN0cy8wMDAvMDU2LzI3OS83NzYvak1ET3ZQM0tlelJhUG4wa1lscW95azhBVy9mNDliN2ZmODM3ODM2Zjc5OGRiMDJjYzkzZTllZWI0OWEyOTE2OTJlLnBuZw.jpg",
    name: "iHerb",
    cashback: "Up to 15%",
  },
];

export default function TwoColumnGrid() {
  const colorScheme = useColorScheme();
  const renderItem = ({
    item,
  }: {
    item: { logo: string; name: string; cashback: string };
  }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <Text
        style={[
          styles.name,
          { color: Colors[colorScheme ?? "light"].secondaryText },
        ]}
      >
        {item.name}
      </Text>
      <Text
        style={[
          styles.cashback,
          { color: Colors[colorScheme ?? "light"].text },
        ]}
      >
        {item.cashback}
      </Text>
    </View>
  );

  return (
    <View>
      <Text
        style={[
          styles.headerText,
          { color: Colors[colorScheme ?? "light"].text },
        ]}
      >
        Recommended for you
      </Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    flex: 1,
    marginRight: 8,
  },
  logo: {
    maxWidth: "100%",
    height: 100,
    borderRadius: 12,
    marginBottom: 4,
  },
  name: {
    fontSize: 12,
    textAlign: "left",
    marginBottom: 4,
  },
  cashback: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
});
