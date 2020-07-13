import React, { Component } from 'react'
import { connect } from 'react-redux'
// Props passing not needed -> mapped straight to the state in the reducer!
class Try extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'tomato' }}>
                    {this.props.data}
                </div>
                <div>
                    <button onClick={() => this.props.plus({ type: "INCREASE" })}>+</button>
                    <button onClick={() => this.props.minus({ type: "DECREASE" })}>-</button>
                    <button onClick={() => this.props.reset({ type: "RESET" })}>Reset</button>
                </div>
            </div>

        )
    }

}
const mapStateToProps = state => {
    return {
        data: state.count,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        plus: (action) => dispatch(action),
        minus: (action) => dispatch(action),
        reset: (action) => dispatch(action),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Try);
// export default Try

