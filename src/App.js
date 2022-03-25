import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddNewClient from './Pages/Dashboard/ManageClients/AddNewClient/AddNewClient';
import ViewAllClient from './Pages/Dashboard/ManageClients/ViewAllClient/ViewAllClient';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<DashboardHome />}>
          </Route>
          <Route path="/home" element={<DashboardHome />}>
          </Route>
          <Route path="/add-new-client" element={<AddNewClient />}>
          </Route>
          <Route path="/view-all-client" element={<ViewAllClient />}>
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
