import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

import { COLORS } from '@/assets/common'

type Props = {
  title: string
  description: string
  removeItem: () => void
}

export const RenderItem: FC<Props> = ({ title, description, removeItem }) => {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
