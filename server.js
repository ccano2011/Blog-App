const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const Post = require('./models/post')
const postsRoutes = require('./routes/posts');

const db = require('./db/connection')
const PORT = process.env.PORT || 3001

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

// app.use('/api', postsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send("This is the root!"))

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        const posts = await Post.findById(id)
        if (!posts) throw Error('Product not found')
        res.json(posts)
    } catch (e) {
        console.log(e)
        res.send('Post not found!')
    }
})

app.post('/posts', async (req, res) => {
    try {
        const posts = await new Post(req.body)
        await posts.save()
        res.status(201).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.put('/posts/:id', async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndUpdate(id, req.body, { new: true }, (error, post) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!post) {
            return res.status(404).json({ message: 'Post not found!' })
        }
        res.status(200).json(post)
    })
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Post deleted")
        }
        throw new Error("Post not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
