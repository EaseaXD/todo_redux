import { StatusBar } from 'expo-status-bar';
import {TextInput ,TouchableOpacity ,KeyboardAvoidingView, StyleSheet, Text, View ,SafeAreaView, Platform} from 'react-native';
import React, {useState} from "react";
import Task from './components/Task';

export default function App() {

  const[task, setTask] = useState();
  const[taskItem,setTaskItem] = useState([]);
  const handleAddTask = () =>{
    setTaskItem([...taskItem, task])
    setTask(null);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Список задач</Text>

        <View style={styles.items}>
          {
            taskItem.map((item, index) => {
              return <Task key={index} text={item} />
            })
          }
          
        </View>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS ==="ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input}
        placeholder={"Введите задачу"} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20, 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 40
  },
  writeTaskWrapper:{
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "80%",
    paddingVertical: 15 ,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "65%",
    textAlign: "center",
  },
  addWrapper:{  
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addText:{

  }

});
