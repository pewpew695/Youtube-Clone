import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="fixed top-0 left-0 w-full z-50 bg-white">
          <Head />
        </div>
        <div>
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
