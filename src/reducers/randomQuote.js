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
    dbQuote.quotes.map((value, key) => {
        if(key === NumberKey) {
            return [...initialQuoteState.randomQuote = value]
        }
        return NumberKey;
    })
    
}

const rdQuoteReducer = (state = initialQuoteState, action) => {
    switch (action.type) {
        case randomQuoteType:
            console.log(getQuote())   
            return state
        default: 
            return state
    }
}

export default rdQuoteReducer;