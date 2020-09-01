import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

//Add comments : state
function EditableTodo(props) {
  const { todo, update, remove } = props
  const [isEditing, setIsEditing] = useState(false)

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(true)
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id)
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) { 
    console.log("calling handle save")
    update(formData)
    setIsEditing(false)
  }


  function showEditableTodosOrFormToEdit() {
    if (isEditing) {
      return (
        <div>
          <TodoForm initialFormData={todo} handleSave={handleSave} />
        </div>
      )
    } else {
      return (
        <div className="mb-3">
          <div className="float-right text-sm-right">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
                    </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
                    </button>
          </div>
          <Todo todo={todo} />
        </div>
      )
    }
  }

return (
     <div className="EditableTodo">
       {showEditableTodosOrFormToEdit()}
     </div>
  );
}


export default EditableTodo;
