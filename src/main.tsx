import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Styles/styles.css'
import './Styles/footer.css'
import Login from './Pages/login.tsx'
import Register from './Pages/register.tsx'
import Home from './Pages/home.tsx'
import NewsDetail from "./Pages/newsPage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Register/>
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Home />
  },
  {
    path: "/news-detail",
    element: <NewsDetail />
  }
]);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
