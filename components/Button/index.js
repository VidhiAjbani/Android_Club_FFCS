import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Input(props){
    return (
        <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        justifyContent: 'center',
        color: "white",
        width: "90%",
        alignSelf: "center",
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: "skyblue",
        marginBottom: 10,
    },
    text:{
        color: "black"
    }
})