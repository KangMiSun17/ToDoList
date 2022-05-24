import { useTodoContext } from "../common/TodoContext";
import { TodoHeadBlock } from "../styles/TodoStyle";

function TodoHead() {
  const todos = useTodoContext();
  //끝나지 않은 할 일 필터링
  const undoneTasks = todos && todos.filter((todo) => !todo.done);
  const today = new Date();
  //00년 0월 0일
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
