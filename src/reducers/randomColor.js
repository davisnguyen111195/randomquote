const randomColorType = "RANDOM_COLOR"
const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]


const randomColorInitialState = colors
const RDColorReducer = (state = randomColorInitialState, action) => {
    
    switch(action.type) {
        case randomColorType: 
            return [...state = colors]
        default:
            return state
    }
}

export default RDColorReducer