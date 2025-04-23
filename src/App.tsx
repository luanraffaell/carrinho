import { createBrowserRouter } from 'react-router'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import { Cart } from './pages/cart'
import { ProductDetail } from './pages/detail';
import { NotFound } from './pages/notFound';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path:"/product/:id",
        element:<ProductDetail/>
      }     
    ]
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);

export { router };