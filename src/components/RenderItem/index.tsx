import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

import { COLORS } from '@/assets/common'
import { TODO } from '@/database/actions/todoActions'

type Props = {
  item: TODO
  removeItem: () => void
}

export const RenderItem: FC<Props> = ({ item, removeItem }) => {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <IconButton icon="delete-circle-outline" color={COLORS.darkred} onPress={removeItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    minHeight: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  },
  content: {},
  title: {
    fontWeight: '700'
  },
  description: {
    maxWidth: 200
  }
})
