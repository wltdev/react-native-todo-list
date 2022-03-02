import { StyleSheet } from 'react-native'

import { COLORS } from '@/assets/common'

export const styles = StyleSheet.create({
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
