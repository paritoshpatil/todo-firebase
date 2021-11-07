import React from "react";

function Todo(props) {
  const changeCompletedLocal = (event) => {
    event.preventDefault();
    props.changeCompleted(props.todo.id, !props.todo.completed);
  };

  const deleteTodoLocal = (event) => {
    event.preventDefault();
    props.deleteTodo(props.todo.id);
  };

  return (
    <li className="flex flex-row items-center text-2xl rounded-lg bg-white shadow-lg p-3 border-2 border-transparent hover:border-lgray">
      {props.todo.completed && (
        // if task is completed
        <button onClick={changeCompletedLocal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-4 hover:text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      )}

      {!props.todo.completed && (
        // if task is NOT completed
        <button onClick={changeCompletedLocal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4 hover:text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-4 hover:text-red-500 flex-none"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={deleteTodoLocal}
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>

      {props.todo.completed && (
        <span className="line-through"> {props.todo.text} </span>
      )}

      {!props.todo.completed && <span className=""> {props.todo.text} </span>}
    </li>
  );
}

export default Todo;
