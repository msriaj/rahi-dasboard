import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import InfoCard from "./components/InfoCard/InfoCard";
import CoustomerList from "./components/CustomerList/CoustomerList";
import AddCustomer from "./components/AddCustomer/AddCustomer";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(<InfoCard />);
  const pageSet = (pageName) => {
    setPage(pageName);
  };
  return (
    <div className="bg-gray-100 flex">
      <Sidebar pageinfo={pageSet}></Sidebar>
      <div className="w-full p-10">{page}</div>
    </div>
  );
}

export default App;

// tore allah bacai rakhuk ,tor sahos kom na , tui component re state er vitor voira disos
