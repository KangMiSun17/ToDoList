import {
  CheckCircle,
  TodoItemBlock,
  Text,
  Remove,
} from "../styles/TodoItemStyle";
import { MdDone, MdDelete } from "react-icons/md";

interface Todo {
  id: string;
  done: boolean;
  text: string;
}

function TodoItem({ id, done, text }: Todo) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
