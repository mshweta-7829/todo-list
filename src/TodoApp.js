import React, { useState } from "react";
import uuid from "uuid/v4";

import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js"

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp(props) {
  const { initialTodos } = props
  const [todos, setTodos] = useState(initialTodos)

  /** add a new todo to list */
  //TODO: use uuid
  function create(todo) {
    const newTodo = { ...todo, id: uuid() }
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos => 
      todos.map(todo => {
        if (todo.id === updatedTodo.id)
          return updatedTodo
        else
          return todo
      })
    )
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(todos => todos.id !== id))
  }

  /** get highest-priority todo */
  function getTopTodo() {

    const priorities = todos.map(todo => todo.priority)
    const topPriority = Math.min(...priorities)
    const topTodo = todos.find(todo => todo.priority === topPriority)
    return topTodo
  }

  return (
    <main 
    className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          <EditableTodoList todos={todos} update={update} remove={remove} />
        </div>
        <div className="col-md-6">
          <section className="mb-4">
            <h3>Top Todo</h3>
            <Todo todo={getTopTodo()} />
          </section>
          <section>
            <h3 className="mb-3">Add New Todo</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>
      </div>

    </main>
  );
}

export default TodoApp;