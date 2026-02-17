const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000
app.use(bodyParser.json());
let users = []
let counter = 1;
app.get('/users',(req, res) => {
    res.json(users);
});


app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user });
    })

app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let uqdatedUser = req.body;

    let seletedIndex = users.findIndex(user => user.id == id);

    if (uqdatedUser.name) {
        users[seletedIndex].name = uqdatedUser.name;
    }
    if (uqdatedUser.email) {
        users[seletedIndex].email = uqdatedUser.email;
    }

    res.json({
        message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexUpdated: seletedIndex
        }
    });
})

app.delete('/user/:id', (req, res) => {
    let id = req-params.id;
    let seletedIndex = users.findLastIndex(user => user.id ==id);
    users.splice(seletedIndex, 1);
    res.json({
        message: 'User deleted successfully',
        indexDeleted: seletedIndex
    });
})

app.listen(port, () => {
    console.log('Server is running on port ${port}')
});
