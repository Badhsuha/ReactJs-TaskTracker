import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [AddClose, setShowAdd] = useState(false);

  const [tasks, setState] = useState([
    { id: 1, task: "Visit Doctor", date: "March 25th 20121" },
    { id: 2, task: "Appointment with lawyer", date: "March 27th 20121" },
    { id: 3, task: "Coding Interview", date: "April 3rd 20121" },
  ]);

  return (
    <div
      className="border border-dark"
      style={{ width: 400, height: "auto", padding: 30 }}
    >
      <Header addOrClose={() => setShowAdd(!AddClose)} state={AddClose} />
      {AddClose && <AddTask />}
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
