import React, {
  ReactNode,
  useContext,
  useReducer,
  createContext,
  useRef,
  Dispatch,
  MutableRefObject,
} from "react";
import { Action, Todo } from "./TodoType";

const myStorage = localStorage.getItem("todoList");
const initialTodos = JSON.parse(myStorage || "[]");

function todoReducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      localStorage.setItem("todoList", JSON.stringify([...state, action.todo]));
      return state.concat(action.todo);
    case "TOGGLE":
      const toggleState = state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
      localStorage.setItem("todoList", JSON.stringify([...toggleState]));
      return toggleState;

    case "REMOVE":
      const RemoveState = state.filter((todo) => todo.id !== action.id);
      localStorage.setItem("todoList", JSON.stringify([...RemoveState]));
      return RemoveState;
    default:
      throw new Error(`Unhandled action type`);
  }
}

const TodoContext = createContext<Todo[] | null>(null);
const DispatchContext = createContext<Dispatch<Action> | null>(null);
const NextIdContext = createContext<MutableRefObject<number> | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const num: number[] = [];
  initialTodos &&
    initialTodos.map((todo: { id: number }) => {
      num.push(todo.id);
    });
  const maxId = num.length ? Math.max(...num) : 0;
  const nextId = useRef(maxId + 1);
  return (
    <TodoContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <NextIdContext.Provider value={nextId}>
          {children}
        </NextIdContext.Provider>
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useDispatchContext() {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useNextIdContext() {
  const context = useContext(NextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
