// implement your API here
const express = require('express');
const db = require('./data/db');
const PORT = 8000;

const server = express();

server.use(express.json());


server.get('/api/users', (req, res) => {
    db.find().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(500).json({error: "The users information could not be retrieved."});
    });
});

server.get('/api/users/:id', (req, res) => {
    const {id} = req.params;
    db.findById(id).then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(400).json({error: "The user with the specified ID does not exist."});
    });
});

server.post('/api/users', (req, res) => {
    const userInfo = req.body;
    if(userInfo.name === "" || userInfo.bio === "") {
            res.status(400).json({errorMessage: "Please provide a name or bio for the user."})
        } else {
            db.insert(userInfo).then(user => {
                res.status(201).json(user);
            }).catch(err => {
                res.status(500).json({error: "There was an error while saving the user to the database."});
            });
        }
});

server.put('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const userInfo = req.body;

    if (userInfo.name === "" || userInfo.bio === "") {
        res.status(400).json({errorMessage: "Please provide name and bio for the user."});
    } else {
        db.update(id, userInfo).then(updated => {
            if(updated) {
                res.status(200).json(updated);
            } else {
                res.status(404).json({message: "The user with the specified ID does not exist."});
            }
        }).catch(err => {
            res.status(500).json({error: "The user information could not be modified."});
        });
    }
});

server.delete('/api/users/:id', (req, res) => {
    const {id} = req.params;

    db.remove(id).then(removed => {
        if(removed) {
            res.status(204).end();
        } else {
            res.status(404).json({message: "The user with the specified ID does not exist."});
        }
    }).catch(err => {
        res.status(500).json({message: "The user could not be removed"});
    })
});


server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}...`);
});
