import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import CustomButton from "../../components/common/custom-button";

const OrderHistory = ({ params }) => {
  const renderItems = () => {
    return params.map((item, index) => (
      <View style={styles.container}>
        <View style={styles.info}>
          <View
            style={{ width: 100, height: 100, justifyContent: "flex-start" }}
          >
            <Image source={item.image} style={{ width: 100, height: 100 }} />
          </View>

          <View style={styles.title}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {item.title}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "grey", fontSize: 12 }}>Color:</Text>
              <Text style={{ marginLeft: 5, fontSize: 12 }}>{item.color}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "grey", fontSize: 12 }}>Qty:</Text>
              <Text style={{ marginLeft: 5, fontSize: 12 }}>
                {item.quantity}
              </Text>
            </View>
          </View>

          <View style={{ height: "auto" }}>
            <View style={styles.onprogress}>
              <Text
                style={{ color: "#40dc88", fontSize: 10, fontWeight: "bold" }}
              >
                Completed
              </Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.txtPrice}>$ {item.price}</Text>
            </View>
          </View>
        </View>

        <View style={styles.groupBtn}>
          <View style={{ width: "50%", padding: 5 }}>
            <CustomButton
              text={"Detail"}
              onPress={() => alert("hello")}
              isOutline={true}
            />
          </View>

          <View style={{ width: "50%", padding: 5 }}>
            <CustomButton text={"Tracking"} onPress={() => alert("hello")} />
          </View>
        </View>
      </View>
    ));
  };

  return (
    <ScrollView style={{ padding: 20, marginBottom: 44 }}>
      {renderItems()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderColor: "#e0e0e0",
    borderWidth: 0.7,
    borderRadius: 12,
    padding: 9,
  },
  text1: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
  groupBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  touch1: {
    alignItems: "center",
  },
  btn1: {
    borderColor: "#e3e4e9",
    backgroundColor: "white",
    borderWidth: 2,
    width: "45%",
    borderRadius: 100,
  },
  btn2: {
    borderColor: "#514eb7",
    backgroundColor: "#514eb7",
    borderWidth: 2,
    width: "45%",
    borderRadius: 100,
  },
  info: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    marginLeft: 10,
  },
  onprogress: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    borderColor: "#40dc88",
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 10,
    height: "auto",
  },
  price: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  txtPrice: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default OrderHistory;
