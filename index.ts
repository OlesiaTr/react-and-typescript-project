import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((r) => {
  const { id, title, completed } = r.data as Todo;
  console.log("id :>> ", id, "title :>> ", title, "completed :>> ", completed);
});
