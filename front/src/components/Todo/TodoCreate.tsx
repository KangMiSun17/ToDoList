import React, { SetStateAction, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todosState } from "../../recoil/todo";
import { Todo } from "../common/TodoType";
import {
  InsertFormPositioner,
  InsertForm,
  CircleButton,
  Input,
} from "../styles/TodoCreateStyle";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const todos = useRecoilValue<Todo[]>(todosState);
  const setTodos = useSetRecoilState<Todo[]>(todosState);

  // useRecoilValue = get 변수
  // useSetRecoilState = setter 지정
  // 위와 같은형식으로 get과 setter를 분리하여 사용하는 방법도 있다.

  const onToggle = () => setOpen(!open);
  const onChange = (e: { target: { value: SetStateAction<string> } }) =>
    setValue(e.target.value);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const nextId: number = todos ? todos[todos.length - 1].id + 1 : 0;
    const todo: Todo = { id: nextId, text: value, done: false };
    localStorage.setItem("todoList", JSON.stringify([...todos, todo]));
    setTodos([...todos, todo]);
    setValue("");
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
