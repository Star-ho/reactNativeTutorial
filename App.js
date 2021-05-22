//npx babel-node --presets @babel/env index.js
//npx react-native run-android

import React,{useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import TodoList from './TodoList';

const App = () => { 
  const [todos, setTodos] = useState([]);
  fetch("http://192.168.0.18:3000").then(res=>res.json())
    .then(res=>{
      let arr=[]
      for(let i of Object.entries(res["baemin"])){
        arr.push({brand: "baemin", name: i[0], discountAmount: i[1]})
      }
      for(let i of Object.entries(res["yogiyo"])){
        arr.push({brand: "yogiyo", name: i[0], discountAmount: i[1]})
      }
      arr.sort((a,b)=>(a.name.localeCompare(b.name)))
      console.log(arr)
      setTodos([...arr])
    })
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoList todos={todos} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;