import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCustomer from "../components/AddCustomer/AddCustomer";
import AddTask from "../components/AddTask/AddTask";
import CoustomerList from "../components/CustomerList/CoustomerList";
import InfoCard from "../components/InfoCard/InfoCard";
import TaskList from "../components/TaskList/TaskList";

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<InfoCard />} />
      <Route path="/add-user" element={<AddCustomer />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/customer-list" element={<CoustomerList />} />
      <Route path="/task-list" element={<TaskList />} />
      <Route path="/*" element={<h1>Not found </h1>} />
    </Routes>
  );
};

export default MainLayout;
