import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import { CareerDetails, careerPageLoader } from "./Components/CareerDetails";
import Careers from "./Components/Careers";
import Contact, { contactAction, contactLoader } from "./Components/Contact";
import FaQs, { FaqLoader } from "./Components/FaQs";
import Home, { homeLoader } from "./Components/Home";

import Main from "./Layout/Main";
import CareerPage from "./pages/CareerPage";
import HelpCenterPage from "./pages/HelpCenterPage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from "./Components/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader : homeLoader
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "careers",
        element: <CareerPage />,
        children: [
          {
            path: "/careers",
            element: <Careers />,
          },
          {
            path: "/careers/:id",
            element: <CareerDetails />,
            loader: careerPageLoader,
          },
        ],
      },
      {
        path: "help",
        element: <HelpCenterPage />,
        children: [
          {
            path: "/help/faq",
            element: <FaQs />,
            loader: FaqLoader,
          },
          {
            path: "/help/contact",
            element: <Contact />,
            loader : contactLoader,
            action : contactAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}

export default App;
