const redux = require('redux')
const initialState = {
    counter:0
}

// Reducer
const reducer = (state = initialState,action) => {
    if(action.type === "INCREASE_COUNTER"){
        return {...state, counter:state.counter + 1}
    }
    if(action.type === "ADD_COUNTER"){
        return {...state, counter:state.counter + action.value}
    }
    return state
}

// Store
const store = redux.createStore(reducer)
console.log(store.getState())

// Action
action = {
    type: "ADD_COUNTER",
    value:5
}

// Subscription
store.subscribe(() => {
    console.log("[Subscribe]",store.getState())
})

// Dispatch
store.dispatch({type:'INCREASE_COUNTER'})
console.log(store.getState())

store.dispatch(action)
console.log(store.getState())