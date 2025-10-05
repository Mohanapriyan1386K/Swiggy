import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface Item {
  id: string | number;
  name: string;
  image: ImageSourcePropType;
}

interface HorizontalSelectorProps {
  data: Item[];
  selectedId: string | number | null;
  onSelect: (id:any) => void;
}

const HorizontalMenu: React.FC<HorizontalSelectorProps> = ({
  data,
  selectedId,
  onSelect,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.7}
          onPress={() => onSelect(item.id)}
        >
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor:
                  selectedId === item.id ? "#ffd90091" : "#fff",
              },
            ]}
          >
            <Image source={item.image} style={styles.image} />
            <Text
              style={[
                styles.text,
                { color: selectedId === item.id ? "#000" : "#000" },
              ]}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: 70,
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 50,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HorizontalMenu;
