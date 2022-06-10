import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import "./App.css";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <Navbar />
      <Rightbar />
      <Sidebar />
      <Feed />
    </Box>
  );
}

export default App;
