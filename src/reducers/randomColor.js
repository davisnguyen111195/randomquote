const color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]

const randomColorInitialState = []
const RDColorReducer = (state = randomColorInitialState, action) => {
    switch(action.type) {
        case "RANDOM_COLOR": 
            return state
    }
}

export default RDColorReducer