import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import TicketPage from './pages/TicketPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/ticket" element={<TicketPage/>} />
          <Route path="/ticket/:id" element={<TicketPage editMode={true}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
