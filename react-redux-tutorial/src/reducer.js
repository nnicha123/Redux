const initialState = {
    count: 0,
    arr: [],
    arrObj: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, count: state.count + 1 };
        case 'DECREASE': return { ...state, count: state.count - 1 };
        case 'RESET': return { ...state, count: 0 };
        case "ADD_NUM":
            const newArray = [...state.arr, action.num]
            return { ...state, arr: newArray }
        case "ADD_PERSON":
            const newObj = [...state.arrObj, { name: 'John' }];
            return { ...state, arrObj: newObj }
        case "ADD_HISTORY":
            const history = [...state.arrObj, { name: action.name, email: action.email }]
            return { ...state, arrObj: history }
        default: return state
    }
}
export default reducer