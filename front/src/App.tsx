import { TodoProvider } from "./components/common/TodoContext";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoHead from "./components/Todo/TodoHead";
import TodoList from "./components/Todo/TodoList";
import TodoTemplate from "./components/Todo/TodoTemplate";
import { GlobalStyle } from "./Style";

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
