import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainPage from './MainPage';
import Questions from "../components/Questions";


const CategoriesRouting = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<MainPage />} />
              <Route
                path="/history"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=23&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/mythology"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=20&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/computer-science"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=18&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/literature"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=10&type=multiple"
                    }
                  />
                }
              ></Route>

    </Routes>
    </>
  )
}

export default CategoriesRouting