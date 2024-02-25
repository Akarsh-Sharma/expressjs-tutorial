import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.status(201).send({ msg: "Hellos"});
}); // first arg is the route, second arg is the request handler

app.get('/api/users', (req, res) => {
    res.send([
        { id: 1, username: "anson", displayName: "Anson"},
        { id: 2, username: "skarsh", displayName: "Skarsh"},
        { id: 3, username: "adam", displayName: "Adam"}
    ])
});

app.get('/api/products', (req, res) => {
    res.send([
        { id:123, productName: 'chicken', price: '12.99'}
    ])
})

app.listen(PORT, () => {
    console.log(`Running on Ports ${PORT}`);
})