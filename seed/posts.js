const { runInContext } = require('vm')
const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts =
        [
            {
                "title": "Testing testing TESTING",
                "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "content": "is this the Krusty Krab?",
                "author": "NO THIS IS PATRICK!"
            },
        ]
    await Post.insertMany(posts)
    console.log("Created posts!")
}

const run = async () => {
    await main()
    db.close()
}

run()