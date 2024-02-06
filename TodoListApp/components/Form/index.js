import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import styles from './style'
const Form = (props)=>{
    const handleAddTask = ()=>{
        if(task.length == 0){
            alert('Please enter your task!')
            return false;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    }
    const [task, setTask]=useState('')
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height" } 
            keyboardVerticalOffset={10}
            style={styles.addTask}
        >
            <TextInput 
                value={task}
                placeholder='Your Task'
                style={styles.input}
                onChangeText={(text) => setTask(text)}
                />
            <TouchableOpacity
                onPress={handleAddTask}
            >
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form