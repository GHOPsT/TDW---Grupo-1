// server.js (Node.js + Express example)

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data', 'post.json');

// Get all posts
app.get('/api/posts', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.json(JSON.parse(data));
    });
});

// Create a new post
app.post('/api/posts', (req, res) => {
    const newPost = req.body;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }

        const posts = JSON.parse(data);
        posts.push(newPost);

        fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.status(201).json(newPost);
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
