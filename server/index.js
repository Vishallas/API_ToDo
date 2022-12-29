console.log("Hello World");
import express from "express";

const app = express();

const add=(n1, n2)=>{
  return n1 + n2;
};

const sub = (n1, n2) => {
  return n1 - n2;
};
//get post put delete
app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/hello', (req, res) => {
  res.send("Hell0 route!");
});

app.get('/add', (req, res) => {
  const q = req.query;
  //console.log(q);
  const n1 = parseInt(q['n1'])
  const n2 = parseInt(q['n2'])
  const sum = n1 + n2;
  const response = {
    'n1': n1,
    'n2': n2,
    'sum': sum,
  };
  res.send(response);
  console.log(response);
  // mainurl.com/add?n1=10&n2=5
});

app.get('/sub', (req, res) => {
  const q = req.query;
  //console.log(q);
  const n1 = parseInt(q['n1'])
  const n2 = parseInt(q['n2'])
  const diff = n1 - n2;
  const response = {
    'n1': n1,
    'n2': n2,
    'diff': diff,
  };
  res.send(response);
  console.log(response);
  // mainurl.com/add?n1=10&n2=5
});

app.listen(3000, () => {
  console.log("Started server");
});