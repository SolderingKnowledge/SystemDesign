const express = require("express");
const React = require("react");
// multiple components will to turn into string
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default;
const app = express();

app.get("/", (req, res)=> {
    const content = renderToString(<Home />);
    res.status(200).send(content);
})


app.listen(3000, ()=> {
    console.log(`Listening on port: ${3000}`)
})