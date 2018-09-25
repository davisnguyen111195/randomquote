
import randomColor from './reducers/randomColor'
const redux = require('redux')

const oldState = ({
    randomColors : []
})
const allReducers = redux.combineReducers({
    randomColors: randomColor
})

const store1 = redux.createStore(allReducers)
store1.subscribe(() => {
    console.log(store1.getState())
})

store1.dispatch({
    type: "RANDOM_COLOR",
})
export default store1
