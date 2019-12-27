import { combineReducers } from 'redux'
import notesReduce from './noteReducer'
import visibilityReducer from './visibilityReducer'

const reducer = combineReducers({
  notes: notesReduce,
  visibility: visibilityReducer
})

export default reducer