import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
