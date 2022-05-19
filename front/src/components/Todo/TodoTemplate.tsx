import { ReactNode } from "react";
import { TodoTemplateBlock } from "../styles/TodoStyle";

function TodoTemplate({ children }: { children: ReactNode }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
