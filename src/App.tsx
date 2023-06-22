import React, { Children, useState } from 'react';
import './App.css';
import MenuBar from './MenuBar/MenuBar';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';
import AddHealthData from './component/AddHealthData/AddHealthData';
import AnaData from './component/AnaData/AnaData';
import { MainContextWrapper } from './Store/mainContext/mainContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './MainComponent/MainComponent';


function App() {
  const [loadComponent, setLoadComponent] = useState(<AddHealthData/>)
  
  

  const router = createBrowserRouter([
    {

      path : '/',
      element: <MainComponent/>,
      children : [
        {
       path : "/",
       element : <AddHealthData/>
        },
        {
          path : "/showData",
          element : <ShowHealthData/>
           },
           {
            path : "/anData",
            element : <AnaData/>
             },
      ]
  }
]
);

  return (
  <MainContextWrapper>

      {/*  />
       <div className = 'main-content'> 
    {loadComponent}
    </div> */}

    <div className = 'main-content'>
    <RouterProvider router = {router}/>
    </div>

  </MainContextWrapper>
  );
}

export default App;
