import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

interface Item {
  id: string;
  name: string;
  image: ImageSourcePropType;
  rating: number;
  delivery: string;
  time: string;
  tags: string[];
}

interface CustomFlatListProps {
  data: Item[];
  onPressItem?: (item: Item) => void;
  ratingIcon: ImageSourcePropType;
  shipIcon: ImageSourcePropType;
  timeIcon: ImageSourcePropType;
}

const CustomFlatList: React.FC<CustomFlatListProps> = ({
  data,
  onPressItem,
  ratingIcon,
  shipIcon,
  timeIcon,
}) => {
  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => onPressItem && onPressItem(item)}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.tags}>{item.tags.join(" • ")}</Text>

        <View style={styles.row}>
          {/* Rating */}
          <Image source={ratingIcon} style={styles.icon} />
          <Text style={styles.rating}>{item.rating}</Text>

          {/* Delivery */}
          <Image source={shipIcon} style={[styles.icon, { marginLeft: 12 }]} />
          <Text style={styles.delivery}>{item.delivery}</Text>

          {/* Time */}
          <Image source={timeIcon} style={[styles.icon, { marginLeft: 12 }]} />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginHorizontal: 15,
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  tags: {
    color: "gray",
    fontSize: 12,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  rating: {
    marginLeft: 4,
    fontWeight: "600",
  },
  delivery: {
    marginLeft: 4,
    color: "gray",
  },
  time: {
    marginLeft: 4,
    color: "gray",
  },
});

export default CustomFlatList;
