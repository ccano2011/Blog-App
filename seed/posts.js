const { runInContext } = require('vm')
const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts =
        [
            {
<<<<<<< HEAD
              "title": "This is the first day",
              "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "content": "Hello",
              "author": "Chris"
          }, 
=======
                "title": "Testing testing TESTING",
                "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "content": "is this the Krusty Krab?",
                "author": "NO THIS IS PATRICK!"
            },
>>>>>>> 99f6fe2090d0fd9de6c99ec77a81569d79460161
        ]
    await Post.insertMany(posts)
    console.log("Created posts!")
}

const run = async () => {
    await main()
    db.close()
}

run()