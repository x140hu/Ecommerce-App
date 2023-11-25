import { TextInput, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomInput = (props) => {
  const { icon, title, placeholder, returnKeyType, isPassword = false, keyboardType = null } = props;

  return (
    <View>
      <View style={styles.titleGroup}>
        <Text style={styles.titleInput}>{title}</Text>
      </View>
      <View style={styles.box}>
        <Icon style={{ paddingHorizontal: 10, width: 40 }} name={icon} size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          returnKeyType={returnKeyType}
          secureTextEntry={isPassword}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleGroup: {
    marginTop: 15,
    marginBottom: 5
  },
  titleInput: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fbfbfd',
    height: 50,
    borderRadius: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fbfbfd',
    color: '#424242',
  },
});

export default CustomInput;