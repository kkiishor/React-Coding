import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <>
    <header>
      <ul className='text-center  flex justify-center'>
        <li className='p-2'>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className='p-2'>
        <NavLink to="/about">About</NavLink>
        </li>

        <li className='p-2'>
        <NavLink to="contact">Contact</NavLink>
        </li>

      </ul>
    </header>

    <div>
      <h1 className="text-3xl font-bold underline text-center mt-4">
        Hello world!
      </h1>
      
      <Outlet />
    </div>
    
    </>
  );
}

export default App;
