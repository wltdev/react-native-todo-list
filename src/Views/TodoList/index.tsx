import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Keyboard, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS } from '@/assets/common'
import { RenderItem } from '@/components/RenderItem'

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

export const TodoList = () => {
  const [newItemTitle, setNewItemTitle] = useState('')
  const [items, setItems] = useState(LIST)

  const saveItem = () => {
    if (newItemTitle.length) {
      setItems((previous) => [...previous, { title: newItemTitle, description: 'ajkshdkjahskjd' }])
      setNewItemTitle('')
      Keyboard.dismiss()
    }
  }

  const removeItem = (title: string) => {
    setItems((previous) => previous.filter((item) => item.title !== title))
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
          {items.map((item, index) => (
            <RenderItem key={index} {...item} removeItem={() => removeItem(item.title)} />
          ))}
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20
  },
  scrollview: {
    flex: 1,
    marginTop: 20,
    borderRadius: 10
    // borderWidth: 1,
    // backgroundColor: COLORS.secondary,
    // elevation: 10,
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84
    // height: '100%'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1
  },
  input: {
    flex: 1,
    height: 50,
    marginRight: 10,
    backgroundColor: COLORS.background
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
