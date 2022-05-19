import { TodoListBlock } from "../styles/TodoStyle";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem id="1" text="투두리스트 만들기" done={false}></TodoItem>
      <TodoItem id="2" text="타입스크립트 정복하기" done={true}></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
