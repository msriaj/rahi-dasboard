import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import InfoCard from './components/InfoCard/InfoCard';
import CoustomerList from './components/CustomerList/CoustomerList';
import AddCustomer from './components/AddCustomer/AddCustomer';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <div className="bg-gray-100 flex">
      <Sidebar></Sidebar>
      <div className="w-full p-10">
        <TaskList />
        <InfoCard />
        <AddTask />
        <CoustomerList />
        <AddCustomer />
      </div>
    </div>
  );
}

export default App;
