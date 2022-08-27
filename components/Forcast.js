import React from 'react'
import { Text, View,StyleSheet } from 'react-native'


export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.textmain}>{props.main}</Text>
        <Text style={styles.textdescription}>{props.description}</Text>
        <View>
            <Text style={styles.texttemp}>{props.temp} °C</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    textmain: {
        color: '#fff',
        fontSize: 30,
        paddingBottom: 10,
    },
    textdescription: {
        color: '#fff',
        fontSize: 15,
        paddingBottom: 10,
    },
    texttemp: {
        color: '#fff',
        fontSize: 30,
        paddingBottom: 10,
    },
});