import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
