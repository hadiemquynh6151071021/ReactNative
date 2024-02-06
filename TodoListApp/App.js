import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";
import Task from "./components/Task";
import styles from "./App.components.style";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    //Add task
    setTaskList([...taskList, task]);
  }
  const handleDeleteTask = (index) =>{
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn xóa?',
      [{
        text:'OK',
        onPress: () => {
          let taskListTmp = [...taskList]; // Tạo một bản sao của taskList
          taskListTmp.splice(index, 1); // Xóa phần tử tại index từ bản sao taskListTmp
          setTaskList(taskListTmp);
        }
      },
      {text: 'Cancel', onPress: () => {}}
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) =>{
              return <Task key={index} itemTask={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }        
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask}/>
    </View>
  );
}




