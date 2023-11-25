import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export const SIZES = {
   // app dimensions
   width,
   height,
}
const appTheme = { SIZES };