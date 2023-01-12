import './App.css';
import {Header} from "./components/Header";
import { Route, Routes } from "react-router-dom";
import {ArticleList} from "./components/ArticleList";
import { SingleArticle } from './components/SingleArticle';
import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { ArticlesByTopic } from './components/ArticlesByTopic';

function App() {
  const [username, setUsername] =useState('')


  return (
    <div className="App">
      <Header setUsername={setUsername}/>
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
        <Route path="/articles/topics/:topic" element={<ArticlesByTopic/>}></Route>
        <Route path="/articles/:articleId" element={<SingleArticle username={username}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
