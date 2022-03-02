import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

import { COLORS } from '@/assets/common'

type Props = {
  title: string
  removeItem: () => void
}

export const RenderItem: FC<Props> = ({ title, removeItem }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
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
    borderBottomWidth: 1
  },
  title: {
    fontWeight: '700'
  }
})
