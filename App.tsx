import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import { COLORS } from '@/assets/common'
import { TodoList } from '@/Views/TodoList'

const App = () => {
  return (
    <>
      <PaperProvider>
        <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
        <SafeAreaView style={styles.root}>
          <TodoList />
        </SafeAreaView>
      </PaperProvider>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16
  }
})
