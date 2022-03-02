import React, { useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS } from '@/assets/common'
import { RenderItem } from '@/components/RenderItem'

const LIST = [
  {
    title: 'Item 1'
  },
  {
    title: 'Item 2'
  },
  {
    title: 'Item 3'
  }
]

export const TodoList = () => {
  const [newItemTitle, setNewItemTitle] = useState('')
  const [items, setItems] = useState(LIST)

  const saveItem = () => {
    if (newItemTitle.length) {
      setItems((previous) => [...previous, { title: newItemTitle }])
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

      <ScrollView style={styles.scrollview}>
        {items.map((item, index) => (
          <RenderItem key={index} {...item} removeItem={() => removeItem(item.title)} />
        ))}
      </ScrollView>
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
    marginTop: 20
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
    backgroundColor: COLORS.greenDark,
    borderRadius: 5,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
