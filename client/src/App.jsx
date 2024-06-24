import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Sidemenu from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Patients from './views/Patients';
import { ModalProvider } from './contextproviders/ModalContext';
import VisitRegistration from './components/visits/Registration';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (  
    <Router>
      <div className="container">
        <ModalProvider>
          <Sidemenu visible={sidebarVisible}/>
          <div className={`content px-4 ${sidebarVisible ? 'content-shrink' : 'content-expand'}`}>
            <Navbar onToggle={toggleSidebar}/>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/patients" element={<Patients/>}/>
            </Routes>
          </div>
          <VisitRegistration/>
        </ModalProvider>
      </div>
    </Router>
  );
}

export default App;