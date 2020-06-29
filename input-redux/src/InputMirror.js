import React from 'react'
import {connect} from 'react-redux'

function InputMirror(props) {
    console.log('render',props)
    return (
        <div>
            <input value={props.inputValue} onChange={props.inputChanged}/>
            <p>{props.inputValue}</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('mapStateToProps',state)
    return {
        inputValue:state.inputValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged:(e) => {
            console.log('Changed',e.target.value)
            const action = {type:'INPUT_CHANGE',text:e.target.value}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputMirror)
