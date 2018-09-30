import  dbQuote from '../Database/quotes.json';
const randomQuoteType = "RANDOM_QUOTE";


let initialQuoteState = ({
    randomQuote: [{
        quote: "",
        author: ""
    }]
    
})
let getQuote = () => {
    let NumberKey = Math.floor(Math.random()*dbQuote.quotes.length)
    console.log(NumberKey)
    dbQuote.quotes.map((value, key) => {
        if(key === NumberKey) {
            [...initialQuoteState.randomQuote = value]
        }
    })
}

const rdQuoteReducer = (state = initialQuoteState, action) => {
    switch (action.type) {
        case randomQuoteType:
            getQuote()   
            return state
        default: 
            return state
    }
}

export default rdQuoteReducer;