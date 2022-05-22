import {
  CheckCircle,
  TodoItemBlock,
  Text,
  Remove,
} from "../styles/TodoItemStyle";
import { MdDone, MdDelete } from "react-icons/md";
import { Todo } from "../common/TodoType";

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
