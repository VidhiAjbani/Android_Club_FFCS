import React from 'react'
import { StyleSheet, TextInput} from 'react-native';

export default function Input(props){
    return (
        <TextInput value={props.value} onChangeText={(val)=>{props.onChange(val)}} placeholder={props.placeholder} secureTextEntry={props.type==="password"} style={styles.input} />
    );
}

const styles = StyleSheet.create({
    input:{
        borderColor: "darkblue",
        borderWidth: 2,
        color: "black",
        marginHorizontal: 20,
        paddingLeft: 20,
        borderRadius: 20,
        width: "90%",
        alignSelf: "center",
        marginBottom: 20,
        fontSize: 18,
    }
})