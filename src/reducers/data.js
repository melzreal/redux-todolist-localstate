export default (state = {
  todos: [],
}, action) => {
  switch(action.type) {
    case 'FETCH_TODOS':
      return action.payload;

    case 'ADD_TODO':
	  const todo = { title: action.payload.title };
	  return { 	todos: state.todos.concat(todo) };



    default:
      return state;
  }
};