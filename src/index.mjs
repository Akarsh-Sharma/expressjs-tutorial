import express, { response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
    { id: 1, username: "anson", displayName: "Anson"},
    { id: 2, username: "skarsh", displayName: "Skarsh"},
    { id: 3, username: "adam", displayName: "Adam"}
]

// GET REQUESTS

app.get("/", (request, response) => {
    response.status(201).send({ msg: "Hellos"});
}); // first arg is the route, second arg is the request handler

// get call with Query Parameters
app.get('/api/users', (req, res) => {
    console.log(req.query)
    // destructure the query object
    const { query: { filter, value },
    } = req;

    // if both are provided return the filtered users
    if(filter && value){
        return res.send(
            mockUsers.filter((user) => user[filter].includes(value))
        );
    }

    // for any other case, just send the entire mockUsers array
    return response.send(mockUsers);
});

// get call with Route Parameters
app.get('/api/users/:id', (req, res) => {
    console.log(req.params)
    const parsedId = parseInt(req.params.id);
    if(isNaN(parsedId)){ // if we pass in an invalid parameter
        return res.status(400).send({ msg: " Bad request: Invalid ID "})
    }
    const findUser = mockUsers.find((user) => user.id === parsedId);
    if(!findUser) return res.sendStatus(404);
    return res.send(findUser);
})

app.get('/api/products', (req, res) => {
    res.send([
        { id:123, productName: 'chicken', price: '12.99'}
    ])
})

// POST REQUESTS


app.listen(PORT, () => {
    console.log(`Running on Ports ${PORT}`);
})