import {createStore} from 'redux';

const reducer = (state =0, action) => {
    // if(action.type === 'INCREMENT'){
    //     return state + 1;
    // } else if(action.type === 'DECREMENT'){
    //     return state - 1;
    // }
    //     return state;
    //}
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
        //common practice to use switch cases inside the reducer
}


const store = createStore(reducer);

store.subscribe(() => {
    console.log('current state', store.getState());
})

store.dispatch({
    type: 'INCREMENT',
    payload: 1
});
store.dispatch({
    type: 'INCREMENT',
    payload: 5
});
store.dispatch({
    type: 'DECREMENT',
    payload: 2
});