import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {  } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

function Avt_merchant() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.canvas}>
          <Image
            style={styles.image}
            source={require('../../assets/images/products/LOGO3.png')} />
          <View style={styles.content}>
            <View style={styles.view}>
              <Text style={styles.text1}>Upbox Bag</Text>
              <Icon name='check-circle' size={20} style={{ marginTop: 25, marginLeft: 10 }} />
            </View>
            <View style={styles.view}>
              <TouchableOpacity>
                <Text style={styles.text2}>104 Products </Text>
              </TouchableOpacity>
              <Text style={styles.text2}> 1.3k Followers</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Icon name='arrow-right' size={20} style={{ marginTop: 25 }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingTop: 30
  },
  canvas: {
    height: 150,
    padding: 10,
    paddingTop: 20,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginRight: 15
  },
  content: {
    flex: 1,
    marginRight: 1,
  },
  view: {
    flexDirection: 'row',
  },
  text2: {
    color: 'black',
    fontSize: 15,
  },
  text1: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 25,
  },
});
export default Avt_merchant;


