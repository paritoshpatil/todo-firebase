import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  updateDoc,
  orderBy,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const todoCollection = collection(db, "todos");
    const q = query(todoCollection, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          text: doc.data().text,
          id: doc.id,
          completed: doc.data().completed,
        }))
      );
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    addDoc(collection(db, "todos"), {
      text: input,
      timestamp: serverTimestamp(),
      completed: false,
    });
    setTodos([...todos, input]);
    setInput("");
  };

  const changeCompleted = (id, value) => {
    updateDoc(doc(db, "todos", id), {
      completed: value,
    });
  };

  const deleteTodo = (id) => {
    deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="text-lgray-darkest bg-lgray-light font-jetbrains flex flex-col justify-center items-center space-y-10 w-screen h-screen">
      <div className="text-5xl font-bold">Ferb, what should we do today?</div>

      <form
        className="flex flex-row text-xl items-center justify-center space-x-6 w-1/3 pr-4 py-2 rounded-lg bg-white shadow-lg border-2 border-transparent focus-within:outline-none focus-within:border-2 focus-within:border-red-400"
        onSubmit={addTodo}
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="text-center w-full outline-none"
          placeholder="enter something you want to do"
        />
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 hover:text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            type="submit"
            onClick={addTodo}
          >
            <path
              fill-rule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </form>

      <div className="h-1/3 w-1/3 overflow-y-auto">
        <ul className="flex flex-col space-y-8">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              changeCompleted={changeCompleted}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>

      <div className="absolute bottom-10 text-lgray">
        <span>Made with ❤️ using React, Tailwind and Firebase</span>
      </div>
    </div>
  );
}

export default App;
