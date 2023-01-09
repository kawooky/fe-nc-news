import './App.css';
import {Header} from "./components/Header";
import { Route, Routes } from "react-router-dom";
import {ArticleList} from "./components/ArticleList";

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ArticleList />}
        ></Route>
        {/* <Route path="/:singleItem_slug" element={<SingleItem />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
