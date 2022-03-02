import React, { useState, FC } from 'react'
import { ScrollView, View, Text, Keyboard, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS } from '@/assets/common'
import { RenderItem } from '@/components/RenderItem'
import { observeTodos, TODO, saveTodo, removeTodo } from '@/database/actions/todoActions'
import withObservables from '@nozbe/with-observables'

import { styles } from './styles'
// import database from '@/database/index.native'

const LIST = [
  {
    title: 'Item 1',
    description: 'ajkshdkjashkjdhakjashdjkahskjadhkjaashdksjhasjkdhkjah'
  },
  {
    title: 'Item 2',
    description: 'ajkshdkjashkjdhakjashdjkahskjadhkjaashdksjhasjkdhkjah'
  },
  {
    title: 'Item 3',
    description: 'ajkshdkjashkjdhakjashdjkahskjadhkjaashdksjhasjkdhkjah'
  }
]

const TodoList: FC<{ todos: TODO[] }> = ({ todos }) => {
  const [newItemTitle, setNewItemTitle] = useState('')

  const saveItem = () => {
    if (newItemTitle.length) {
      saveTodo({ title: newItemTitle, description: '' })
      setNewItemTitle('')
      Keyboard.dismiss()
    }
  }

  return (
    <>
      <Text style={styles.title}>My ToDo list</Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="Novo registro"
          // mode="outlined"
          style={styles.input}
          onChangeText={setNewItemTitle}
          value={newItemTitle}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={saveItem}>
            <Icon name="plus" color={COLORS.background} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.scrollview}>
        <ScrollView>
          {todos.map((item, index) => (
            <RenderItem key={index} item={item} removeItem={() => removeTodo(item)} />
          ))}
        </ScrollView>
      </View>
    </>
  )
}

const enhance = withObservables([], () => {
  return {
    todos: observeTodos()
  }
})

export default enhance(TodoList)
