import {createStore} from 'redux'

const initialState = {
    inputValue:''
}

const reducer = (state=initialState,action) =>{
    console.log('reducer')
    switch(action.type){
        case 'INPUT_CHANGE':
            return {...state, inputValue:action.text}
        default: return state
    }
}
const store = createStore(reducer)
export default store