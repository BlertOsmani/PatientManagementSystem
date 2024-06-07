import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Sidemenu from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (  
    <Router>
      <div className="container">
        <Sidemenu visible={sidebarVisible}/>
        <div className={`content px-4 ${sidebarVisible ? 'content-shrink' : 'content-expand'}`}>
          <Navbar onToggle={toggleSidebar}/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;