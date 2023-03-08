import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Photos from "./components/Photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId/albums" element={<Albums />} />
          <Route path="/users/:userId/albums/:albumId/photos" element={<Photos />} />
          <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
