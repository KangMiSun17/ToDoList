import { useRecoilState } from "recoil";
import { todosState } from "../../recoil/todo";
import { Todo } from "../common/TodoType";
import { TodoListBlock } from "../styles/TodoStyle";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useRecoilState<Todo[]>(todosState);

  return (
    <TodoListBlock>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </TodoListBlock>
  );
}

export default TodoList;
