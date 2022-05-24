import { useTodoContext } from "../common/TodoContext";
import { TodoListBlock } from "../styles/TodoStyle";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodoContext();
  return (
    <TodoListBlock>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))}
    </TodoListBlock>
  );
}

export default TodoList;
