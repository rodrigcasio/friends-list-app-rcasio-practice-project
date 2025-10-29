const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends

router.get("/",(req,res) => {
  if (!friends) {
    return res.status(400).json({ message: `Not available friends` });
  }

  //res.status(200).json({ message: `Current Friends`, friends: friends });

  res.status(200).send(JSON.stringify(friends, null, 4));
});

// GET by specific ID request: Retrieve a single friend with email ID

router.get('/:email', (req, res) => {
  
});

// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Update the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
