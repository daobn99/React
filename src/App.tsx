import { Todo } from "./Todo";
import { ChangeEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { CreateNewToDo } from "./CreateNewToDo";

function App() {
  type Todo = { id: string; name: string };

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodoString, setNewTodoString] = useState("");

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const onAddingBtnClick = () => {
    const newTodoItem: Todo = {
      id: uuid(),
      name: newTodoString,
    };
    setTodoList([...todoList, newTodoItem]);
    setNewTodoString("");
  };

  return (
    <>
      <p>Todo App</p>
      <div>
        <CreateNewToDo
          newTodoString={newTodoString}
          onNewTodoChange={onNewTodoChange}
          onAddingBtnClick={onAddingBtnClick}
        />
        <div>
          {todoList.map((todo) => {
            return <Todo name={todo.name} />;
          })}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
