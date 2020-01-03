// wrap state in function 

// **********************************
// THIS IS PRETTY GENERIC AND IT LOOKS THE SAME FOR ANY APPLICATION
function createStore(reducer) {
  let state;
  
  function dispatch(action){
    state = reducer(state, action);
    render();
  };

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  };
}

// **********************************

// ANYTHING UNIQUE TO AN APPLICATION STAYS OUTSIDE OF CREATE STORE FUNCTION
// How state changes respectively to specific actions
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
    return state;
  }
};

// How the DOM is updated and rendered and event triggers
function render() {
  let container = document.getElementById('container');
  // get the state from the store
  container.textContent = store.getState().count;
};

// store contains all the application's state
let store = createStore(reducer);
store.dispatch({type: `@@INIT`})

let button = document.getElementById('button');

button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
