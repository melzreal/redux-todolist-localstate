import React, {Component} from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';


class ListItem extends Component {

  handleComplete = complete => {
    const { completeTodo } = this.props;
    complete(completeTodo);
  };

  render() {
    const{ todoId, todo} = this.props;

    return (
      <div key="toDoName">
        <h4>
          <p> {todo.title} </p>
        <span onClick ={() => this.handleComplete(todoId)} />
          
          
        </h4>
      </div>
    );
  }
}
export default connect(null, {completeTodo})(ListItem);