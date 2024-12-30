import {
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import MainPage from "./Website/MainPage/MainPage";
import HomePage from "./Website/HomePage/HomePage";
import ShopPage from "./Website/Shop/ShopPage";
import LayoutPage from "./Website/LayoutPage/LayoutPage";
import { Button, Result } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/">Go To Home</Link>}
      />
    ),
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);

function App() {
  // return <MainPage />;
  // return <RouterProvider router={router} />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
