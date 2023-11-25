import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../../constants/colors";

// dto
import { categories } from "../../constants/dto";

interface ChipListProps {
  listData: categories[];
  onSelect: any;
}

const CategoriesChipList: React.FC<ChipListProps> = ({
  listData,
  onSelect,
}) => {
  const [categories, setCategories] = useState(listData);

  const handleSelect = (categoryId, categoryName) => {
    const updatedCategories = categories.map((category) => ({
      ...category,
      isSelected: category.id === categoryId ? true : false,
    }));
    setCategories(updatedCategories);
    onSelect(categoryName);
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => {
        const handlePress = () => {
          handleSelect(category.id, category.name);
        };
        return (
          <TouchableOpacity
            style={[
              styles.chip,
              styles.border,
              category.isSelected && styles.selectedChip,
              category.isSelected && styles.selectedBorder,
            ]}
            onPress={handlePress}
          >
            <Text
              style={[
                styles.chipText,
                category.isSelected && styles.selectedChipText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "white",
    marginRight: 5,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.light.gray,
  },
  selectedBorder: {
    borderWidth: 1,
    borderColor: colors.light.purple,
  },
  chipText: {
    fontSize: 12,
    color: "black",
  },
  selectedChip: {
    backgroundColor: colors.light.purple,
  },
  selectedChipText: {
    color: "white",
  },
});

export default CategoriesChipList;
