import './App.css';
import {Header} from "./components/Header";
import { Route, Routes } from "react-router-dom";
import {ArticleList} from "./components/ArticleList";
import { SingleArticle } from './components/SingleArticle';
import { useState } from 'react';
import { NavBar } from './components/NavBar';

function App() {
  const [username, setUsername] =useState('')
  const [topic, setTopic] = useState(false)


  return (
    <div className="App">
      <Header setUsername={setUsername}/>
      <NavBar topic={topic} setTopic={setTopic}/>
      <Routes>
        <Route path="/" element={<ArticleList topic={topic}/>}></Route>
        <Route path="/articles/:articleId" element={<SingleArticle username={username} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
