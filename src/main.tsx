import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { theme } from "./styles/theme.ts";
import { router } from "./routes/router.tsx";
import { store } from "./app/store.ts";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,
            style: {
              background: "oklch(14.1% 0.005 285.823)",
              color: "#fff",
              border: "0.2rem solid oklch(68.5% 0.169 237.323)",
            },
          }}
        />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
