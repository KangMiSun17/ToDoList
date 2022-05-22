import { useTodoContext } from "../common/TodoContext";
import { TodoHeadBlock } from "../styles/TodoStyle";

function TodoHead() {
  const todos = useTodoContext();
  console.log(todos);
  return (
    <TodoHeadBlock>
      <h1>2022년 5월 19일</h1>
      <div className="day">목요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
