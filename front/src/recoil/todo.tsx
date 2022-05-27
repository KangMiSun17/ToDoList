import { atom } from "recoil";
import { Todo } from "../components/common/TodoType";

export const inputState = atom<string>({
  key: "inputState",
  default: "",
});

export const todosState = atom<Todo[]>({
  key: "todos",
  default: JSON.parse(localStorage.getItem("todoList") || "[]"),
});
