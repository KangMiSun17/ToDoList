import React from "react";
import {
  CheckCircle,
  TodoItemBlock,
  Text,
  Remove,
} from "../styles/TodoItemStyle";
import { MdDone, MdDelete } from "react-icons/md";
import { Todo } from "../common/TodoType";
import { useDispatchContext } from "../common/TodoContext";

function TodoItem({ id, done, text }: Todo) {
  const dispatch = useDispatchContext();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => {
    dispatch({ type: "REMOVE", id });
  };
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

//불필요한 리렌더링 방지
export default React.memo(TodoItem);
