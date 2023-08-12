import "./App.css";

import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { ArticleList } from "./components/ArticleList/ArticleList";
import { SingleArticle } from "./components/SingleArticle/SingleArticle";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Nav } from "./components/Nav/Nav";
import { Filters } from "./components/Filters/Filters";

function App() {
  const [username, setUsername] = useState("");
  const [topic, setTopic] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  return (
    <div className="App">
      <Nav setUsername={setUsername} />
      <Routes>
        <Route
          path="/"
          element={<ArticleList topic={topic} sortBy={sortBy} order={order}  setTopic={setTopic} setSortBy={setSortBy} setOrder={setOrder}/>}
        ></Route>
        <Route
          path="/articles/:articleId"
          element={<SingleArticle username={username} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
