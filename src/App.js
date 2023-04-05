import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
