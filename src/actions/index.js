
const todos = []

export const addTodo = newToDo => async dispatch => {
	dispatch({
      type: 'ADD_TODO',
      payload: newToDo
    });
};

export const completeTodo = completeToDo => async dispatch => {
  todos.child(completeToDo).remove();
};

