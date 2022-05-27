import React, { useCallback } from "react";
import {
  CheckCircle,
  TodoItemBlock,
  Text,
  Remove,
} from "../styles/TodoItemStyle";
import { MdDone, MdDelete } from "react-icons/md";
import { Todo } from "../common/TodoType";
import { SetterOrUpdater } from "recoil";

interface PropTypes {
  id: number;
  text: string;
  done: boolean;
  todos: Todo[];
  setTodos: SetterOrUpdater<Todo[]>;
}

function TodoItem({ id, done, text, todos, setTodos }: PropTypes) {
  const onToggle = useCallback(
    (id: number): void => {
      const toggleTodo = todos.map((todo: Todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      });
      setTodos(toggleTodo);
      localStorage.setItem("todoList", JSON.stringify([...toggleTodo]));
    },
    [setTodos, todos]
  );
  const onRemove = useCallback(
    (id: number): void => {
      const RemoveState = todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todoList", JSON.stringify([...RemoveState]));
      setTodos(RemoveState);
    },
    [setTodos, todos]
  );
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => onToggle(id)}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={() => onRemove(id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
