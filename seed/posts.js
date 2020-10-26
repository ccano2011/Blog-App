const { runInContext } = require('vm')
const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts =
        [
            {
              "title": "This is the first day",
              "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "content": "Hello",
              "author": "Chris"
          },
          
        ]
    await Post.insertMany(posts)
    console.log("Created posts!")
}
//Figured it out w/ Misha. This is what was missing:
const run = async () => {
    await main()
    db.close()
}
//-----------------------
//Now run is defined and we're seeded!
run()