import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import Sidbar from './components/sidbar/Sidbar';
export default function App() {
  let router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className="flex mt-4">
        <Sidbar />
        {router}
      </div>
    </>
  );
}
