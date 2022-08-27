import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Image } from 'react-native';


export default function Forecast(props) {
    return (
    <View >
        <Image source={{uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`}}
            style={{width: 100, height: 100}} />
        <Text style={styles.textmain}>{props.main}</Text>
        <Text style={styles.textdescription}>{props.description}</Text>
        <View>
            <Text style={styles.textmain}>{props.temp} °C</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    textmain: {
        color: '#fff',
        fontSize: 30,
        paddingBottom: 10,
        textAlign: 'center',
    },
    textdescription: {
        color: '#fff',
        fontSize: 15,
        paddingBottom: 10,
        textAlign: 'center',
    },
});