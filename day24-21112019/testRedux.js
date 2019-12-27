function matheiei(state, action) {
    switch(action.type) {
        case 'PLUS':
            return state + 1
        case 'MINUS':
            return state - 1
        default:
            return state
    }
}

function createStore(reducer, initialState) {
    let state = initialState
    let subscribers = []
    return {
        getState: () => state,
        dispatch: action => {
            return reducer(state, action)
        }
        // (num) => {
        //     switch(num.type) {
        //         case 'INCREMENT':
        //             return state.x + 1
        //         case 'DECREMENT':
        //             return state.x - 1
        //         default:
        //             return state.x
        //     }
        // }
        ,
        subscribe: callback => {
            subscribers.push(callback)
            return subscribers.length - 1
        },
        unsubscribe: id => {
            subscribers[id] = null
        }
    }
}


let store = createStore(matheiei, 2)
console.log(store.getState()) // = console.log(store.getState())
// console.log(store.dispatch({ type: 'INCREMENT' }))
// console.log(store.dispatch({ type: 'DECREMENT' }))
console.log(store.dispatch({ type: 'PLUS' }))
console.log(store.dispatch({ type: 'MINUS' }))
console.log(store.getState())