console.log("Hello World");
// const p = require("package_name")
// import package from  "package_name";
//const express = require("express");
import express from "express";

const app = express();

function add(n1, n2) {
  return n1 + n2;
}

const sub = (n1, n2) => {
  return n1 - n2;
}
//get post put delete
app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/hello', (req,res) => {
  res.send("Hell0 route!");
});


app.listen(3000,()=>{
  console.log("Started server");
});