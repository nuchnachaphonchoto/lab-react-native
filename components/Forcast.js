import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Image } from 'react-native';


export default function Forecast(props) {
    return (
    <View>
        <Image source={{uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`}}
            style={{width: 150, height: 150}} />
        <Text style={styles.texttemp}>{props.temp} °C</Text>
        <Text style={styles.textmain}>{props.main}</Text>
        <Text style={styles.textdescription}>{props.description}</Text>
        
    </View>
    );
}

const styles = StyleSheet.create({
    textmain: {
        color: '#fff',
        fontSize: 30,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: '300',
    },
    textdescription: {
        color: '#fff',
        fontSize: 15,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: '300',
    },
    texttemp: {
        color: '#fff',
        fontSize: 50,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: '300',
    },
});