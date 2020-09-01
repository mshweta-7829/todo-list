import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList(props) {
  const { todos, update, remove } = props

  function showEditableList() {
    return (
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <EditableTodo
              todo={todo}
              update={update}
              remove={remove} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="TodoList">
      <h3 className="mb-3">Todos</h3>
      {showEditableList()}
    </div>
  );
}

export default EditableTodoList;
