import { ThemeProvider } from "./contexts/theme-context"
import { AppRoutes } from "./pages/routes"
import Globalstyle from "./style/global-style"

function App() {
  return (
            <>
                <ThemeProvider>
                    <Globalstyle />
                    <AppRoutes />
                </ThemeProvider>
            </>
        )
    }

export default App
