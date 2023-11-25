import {
  StyleSheet,
  FlatList,
  LayoutAnimation,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import * as React from "react";
import colors from "../../constants/colors";
import Icon from "react-native-vector-icons/EvilIcons";
import { HistorySearch } from "../../constants/dto";

const ChipsSearch = (props: { data: HistorySearch[]; onPress: any }) => {
  const defaultData = props.data;
  const [data, setData] = React.useState(defaultData);

  const layoutAnimConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 100,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  const removeItem = (id) => {
    let arr = data.filter(function (item) {
      return item.id !== id;
    });
    setData(arr);
    LayoutAnimation.configureNext(layoutAnimConfig);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {data.map((chip) => {
        const style = StyleSheet.create({
          container: {
            alignItems: "baseline",
            marginRight: 10,
            marginBottom: 10,
          },
          canvas: {
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 10,
            paddingLeft: 10,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: colors.light.lightGray,
          },
          text_content: {
            fontSize: 14,
            marginRight: 10,
          },
        });

        return (
          <View key={chip.id} style={style.container}>
            <TouchableOpacity
              style={style.canvas}
              onPress={() => props.onPress(chip.label)}
            >
              <Text style={style.text_content}>{chip.label}</Text>
              <TouchableOpacity onPress={() => removeItem(chip.id)}>
                <Icon
                  name="close"
                  size={20}
                  color={colors.light.secondaryGray}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {},
});

export default ChipsSearch;
