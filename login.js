import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
export default function Login(){

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <ImageBackground style={styles.sheet} source={require('./assets/scenery.jpg')}> 
        <View style={{borderRadius: 75, marginTop:20}}>
            <Image style={styles.image} source={require('./assets/sunset.jpg') } width={100} height={100}/></View>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.text}>Email</Text>
            <Input value={email} onChange={setEmail} placeholder="Email@gmail.com" type="email" />
            <Text style={styles.text}>Password</Text>
            <Input value={password} onChange={setPassword} placeholder="Password" type="password" />
            <Button>Submit</Button>
            <Button>Signup</Button>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    sheet:{
        flex: 1,
    },
    title:{
        fontSize: 40,
        color: "black",
        fontWeight: "bold",
        alignSelf: 'center',
        textDecorationLine: 'underline',
    },
    image: {
        alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 50,
    },
    text:{
        marginLeft: "5%",
        color: "black",
        fontSize: 20,
        marginBottom: 5,
    },
    bottomlink: {
        alignSelf: "center",
        color: "black",
        fontSize: 14,
        marginTop: 10,
    },
})
