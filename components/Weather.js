import React from 'react'
import { Text,ImageBackground, StyleSheet, View } from 'react-native'
import { useState } from 'react';
import Forecast from './Forcast';
import { useEffect } from 'react';

export default function Weather(props) {
    useEffect(() => {
            console.log(`fetching data with zipCode = ${props.zipCode}`)
            if (props.zipCode) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=da3ac427b75fd0d989c4147444efaab0`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])

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
   