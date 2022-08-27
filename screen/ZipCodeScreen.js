import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View,FlatList,StyleSheet } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { TouchableHighlight } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import DateTime from "../components/DateTime";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code, place: place})}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
    
)
const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../background/Home.jpg')} style={styles.backdrop}>
            
            <DateTime />
            <Text style={styles.title} >weather 🌥</Text>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
            <StatusBar style="auto" />
        </ImageBackground>
        
            
        
    );
   
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 35,
        // borderColor: '#FF3D00',
        borderWidth: 0,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        shadowRadius: 10,
        backgroundColor: '#f5f5f6',
    },
    zipPlace: {
        flex: 1,
        textAlign: 'center',
        
    },
    zipCode: {
        flex: 1,
        textAlign: 'center',  
    },
    backdrop : {
        height: '100%',
        width: '100%',
    },
    title: {
        color: '#fff',
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: '300',
        textShadowColor: "black",
    },
});