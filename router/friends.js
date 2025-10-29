const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};



router.get("/",(req,res) => {
  if (!friends) {
    return res.status(400).json({ message: `Not available friends` });
  }

  //res.status(200).json({ message: `Current Friends`, friends: friends });

  res.status(200).send(JSON.stringify(friends, null, 4));
});


router.get('/:email', (req, res) => {
  const email = req.params.email;

  if (!friends) {
    return res.status(400).json({ message: 'No friends available'});
  }

  // res.status(200).json({ user: friends[email] });
  res.status(200).send(friends[email]);
});

router.post('/', (req, res) => {
  if (req.body.email) {
    friends[req.body.email] = {
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "DOB": req.body.DOB
    };
  }

  // res.status(200).json({ message: `User ${req.body.email} has been added successfully.` });
  res.send(`User ${req.body.firstName} has been addded!`);
});

// PUT request: Update the details of a friend with email id
router.put('/:email', (req, res) => {
  const email = req.params.email;
  const friend = friends[email];

  if (friend) {
    let newFirstName = req.body.firstName;
    if (newFirstName) {
      friend["firstName"] = newFirstName;
    }

    let newLastName = req.body.lastName;
    if (newLastName) {
      friend["lastName"] = newLastName;
    }

    let newEmail = req.body.email;
    if (newEmail) {
      friend["email"] = newEmail;
    }

    let newDOB = req.body.DOB;
    if (newDOB) {
      friend["DOB"] = newDOB;
    }

    // res.status(200).json({ message: `Friend with the email ${email} updated`, friend: friend });
    res.send(`Friend with email ${email} updated. `);

  } else {
    // res.status(400).json({ message: `Invalid email. Could not find friend with email '${req.params.email}.'` });
    res.send('Unable to find friend!');

  }
});

// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
