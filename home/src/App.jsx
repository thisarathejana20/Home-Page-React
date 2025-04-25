import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
