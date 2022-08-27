import React from 'react'
import { Text,ImageBackground, StyleSheet, View } from 'react-native'
import { useState } from 'react';
import Forecast from './Forcast';
import { useEffect } from 'react';
import { Background } from './Background';

export default function Weather(props) {

    for (let background of Background) {
        if(background.title == props.place){
            var img = background.img;
        }
    }

    useEffect(() => {
            console.log(`fetching data with zipCode = ${props.zipCode}`)
            if (props.zipCode) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=da3ac427b75fd0d989c4147444efaab0`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        icon: json.weather[0].icon,
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
            <ImageBackground source={img} style={styles.backdrop}>
                <View style={styles.background}>
                    <Text style={styles.title}>{props.place}</Text>
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
        fontSize: 10,
        paddingBottom: 10,
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 40,
        paddingBottom: 10,
        textAlign: 'center',
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
   