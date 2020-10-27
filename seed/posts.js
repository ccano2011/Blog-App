const { runInContext } = require('vm')
const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts =
        [
            {
                "title": "Our first Full-Stack Group Exercise",
                "imgURL": "https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg",
                "content": "Getting our feet wet in what will hopefully be our jobs later in the future!",
                "author": "Chris"
            },
            {
                "title": "With a Great Blog....",
                "imgURL": "https://frontburnermarketing.net/wp-content/uploads/2020/04/Blogging-for-Small-Business-Owners.jpg",
                "content": "...comes a great Post",
                "author": "Uncle Ben"
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