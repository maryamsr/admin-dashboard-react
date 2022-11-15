import Home from './pages/Home/Home';
import UserList from './pages/Users/UserList';
import NewUser from './pages/NewUser/NewUser.js';
import Producte from './pages/Producte/Producte.js';

let routes = [
  { path: '/', element: <Home /> },
  { path: '/users', element: <UserList /> },
  { path: '/newUser', element: <NewUser /> },
  { path: '/producte', element: <Producte /> },
];

export default routes;
