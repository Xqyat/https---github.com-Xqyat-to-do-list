import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/HeaderFooter/Header';
import Main from './components/Main/Main';
import CreateEditNote from './components/CreateEditNote/CreateEditNote';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  
  const hideHeaderRoutes = ['/signin', '/signup', '/404'];
  const shouldShowHeader = token && !hideHeaderRoutes.includes(location.pathname);
  
  return (
    <>
      {shouldShowHeader && <Header />}
      
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        
        <Route path="/main" element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        } />
        <Route path="/create" element={
          <PrivateRoute>
            <CreateEditNote />
          </PrivateRoute>
        } />
        <Route path="/edit/:id" element={
          <PrivateRoute>
            <CreateEditNote />
          </PrivateRoute>
        } />
        <Route path="/404" element={<Error404 />} />
        
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
}

export default App;
