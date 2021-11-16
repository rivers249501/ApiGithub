import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Followers from "./views/Followers/Followers";
import SingleUser from "./views/singleUser/SingleUser";
import Following from "./views/following/Following";
import Repo from "./views/repo/Repo";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/users/:name/repos" exact element={<Repo />}/>
      <Route path="/users/:name/following" exact element={<Following />}/>
      <Route path="/users/:name/followers" exact element={<Followers />}/>
      <Route path="/users/:userName" element={<SingleUser />}/>
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
