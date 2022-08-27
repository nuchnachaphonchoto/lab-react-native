import React from 'react'
import { Text,ImageBackground, StyleSheet, View } from 'react-native'
import { useState } from 'react';
import Forecast from './Forcast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        }) 
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.background}>
                    <Text style={styles.text}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} /> 
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: '#fff',
        fontSize: 15,
        paddingBottom: 10,
    },
    background: {
        backgroundColor:'hsla(0, 0%, 0%, 0.4);',
        padding: 15,
        width: '100%',
        // height: '45%',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    }
});
   