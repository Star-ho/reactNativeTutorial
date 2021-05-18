import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <TodoInsert onAddTodo={addTodo} />
    </ScrollView>
  );
};

const addTodo = text => {
  setTodos([
    ...todos,
    {id: Math.random().toString(), textValue: text, checked: false},
  ]);
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;