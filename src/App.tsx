import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { router } from "./Router";
import { Provider } from "react-redux";
import { store } from "./stores";

export default function App() {
    return (
        <ThemeProvider>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
    )
}
