import React from 'react'
import {connect} from 'react-redux'

function Counter(props) {
    console.log('render',props)
    return (
        <div>
            <h1>I am a counter</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.onIncrementClick}>increment</button>
            <button onClick={props.onDecrementClick}>decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps',state)
    return {
        count:state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementClick:() => {
            console.log('increment clicking')
            const action = {type:'INCREMENT'}
            dispatch(action)
        },
        onDecrementClick:() => {
            console.log('decrement clicking')
            const action = {type:'DECREMENT'}
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
