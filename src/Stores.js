
import randomColor from './reducers/randomColor'
import randomQuote from './reducers/randomQuote'
const redux = require('redux')


const allReducers = redux.combineReducers({
    randomColors: randomColor,
    randomQuotes: randomQuote
})

const store1 = redux.createStore(allReducers)
store1.subscribe(() => {
    console.log(store1.getState())
})

store1.dispatch({
    type: "RANDOM_COLOR",
})

store1.dispatch({
    type: "RANDOM_QUOTE"
})

export default store1
