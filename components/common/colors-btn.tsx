import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'


const ColorsButton = ({ colors }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const handleColorPress = (color) => {
        setSelectedColor(color);
        console.log(`Selected color: ${color}`);
    };
    const renderItems = () => {
        return colors.map((color, index) => (
            <TouchableOpacity
                onPress={() => handleColorPress(color)}
                style={[styles.vie2, { backgroundColor: color }]}
                key={index}
            >
                <View style={[styles.vie2, { backgroundColor: color }]}>
                    {
                        selectedColor === color && (
                            <View style={styles.checkmarkContainer}>
                                <Text style={styles.checkmark}>✓</Text>
                            </View>
                        )
                    }
                    <Text style={styles.txt1}></Text>
                </View>
            </TouchableOpacity>
        ));
    };

    return <View style={styles.vie1}>{renderItems()}</View>;
}

const styles = StyleSheet.create({
    checkmarkContainer: {
        position: 'absolute',
        top: '150%',
        left: '190%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    checkmark: {
        fontSize: 24,
        color: 'white',
    },

    vie1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Constants.statusBarHeight,
    },
    vie2: {
        width: 30,
        height: 30,
        borderRadius:15,
        position: 'relative',

    },

    txt1: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 18,
    },

})

export default ColorsButton;