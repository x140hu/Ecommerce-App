import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import colors from "../../constants/colors";
import Icon from "react-native-vector-icons/Feather";
import { SimpleLineIcons } from "@expo/vector-icons";

//data
import { HistorySearchList, ProductListData } from "../../fetch-data/home-tab";

// import component
import ChipsSearch from "./chips-search";
import ProductListPopular from "./product-list-popular";
import ProductItem from "../../components/product-item";

interface SearchScreenProps {
  navigation: any;
}

const Search: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [refreshChips, setRefreshChips] = useState(false);
  const [filtered, setFilteredData] = useState([]);
  const [clearAll, setClear] = useState(false);
  const [text, setText] = useState("");
  const dataDefault = ProductListData;

  const handleInputChange = (text) => {
    setText(text);
    const filteredProducts = dataDefault.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };
  const handleSelectLabel = (label) => {
    const newFiltered = dataDefault.filter((product) =>
      product.name.toLowerCase().includes(label.toLowerCase())
    );
    setFilteredData(newFiltered);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* search and back home */}
        <View style={styles.titleSearch}>
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={styles.iconBack}
          >
            <SimpleLineIcons name="arrow-left" size={15} color="black" />
          </TouchableOpacity>
          <View style={[styles.canvasSearch]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                style={{ marginLeft: 10 }}
                name="search"
                size={20}
                color="#000"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Search something..."
                onChangeText={handleInputChange}
                placeholderTextColor={colors.light.secondaryGray}
              ></TextInput>
            </View>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          {text.length > 0 ? (
            filtered.length <= 0 ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Không tìm thấy sản phẩm</Text>
              </View>
            ) : (
              <FlatList
                data={filtered}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductItem product={item} />}
              />
            )
          ) : (
            <>
              {/* title chip search */}
              {!clearAll ? (
                <>
                  <View style={styles.canvasTitle}>
                    <Text style={styles.textTitle}>Last Search</Text>
                    <TouchableOpacity onPress={() => setClear(true)}>
                      <Text style={{ color: colors.light.darkBlue }}>
                        Clear All
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* chip search */}
                  <ChipsSearch
                    data={HistorySearchList}
                    onPress={handleSelectLabel}
                  />
                </>
              ) : (
                <></>
              )}

              {/* title popular search */}
              <View style={styles.canvasTitle}>
                <Text style={styles.textTitle}>Popular Search</Text>
              </View>
              <ProductListPopular listData={ProductListData}></ProductListPopular>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  canvasTitle: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleSearch: {
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  textTitle: {
    fontSize: 17,
    fontWeight: "700",
  },
  iconBack: {
    alignItems: "center",
  },
  canvasSearch: {
    width: "90%",
    padding: 5,
    paddingHorizontal: 5,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: colors.light.purple,
  },
  textInput: {
    marginLeft: 10,
    padding: 2,
    maxWidth: 220,
    paddingLeft: 0,
  },
});

export default Search;
