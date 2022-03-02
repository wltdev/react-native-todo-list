import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import { COLORS } from '@/assets/common'
import database from '@/database/index.native'
import TodoList from '@/Views/TodoList'
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'

const App = () => {
  return (
    <DatabaseProvider database={database}>
      <PaperProvider>
        <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
        <SafeAreaView style={styles.root}>
          <TodoList />
        </SafeAreaView>
      </PaperProvider>
    </DatabaseProvider>
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
