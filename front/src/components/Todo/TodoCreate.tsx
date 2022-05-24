import React, { SetStateAction, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatchContext, useNextIdContext } from "../common/TodoContext";
import {
  InsertFormPositioner,
  InsertForm,
  CircleButton,
  Input,
} from "../styles/TodoCreateStyle";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatchContext();
  const nextId = useNextIdContext();

  const onToggle = () => setOpen(!open);
  const onChange = (e: { target: { value: SetStateAction<string> } }) =>
    setValue(e.target.value);
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  console.log(JSON.parse(localStorage.getItem("todoList") || "[]"));

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
