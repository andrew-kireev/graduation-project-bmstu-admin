const grpcClientAdminProfile = require('./profiles/client/client');
const express = require('express');
const ms = require('./profiles/protobuff/admin_profiles_pb');

const app = express()
const port = 4000.
...........
app.use(express.json());

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const data = req.body
    console.log(data)

    var profile = new ms.AdminProfile();

    profile.setLogin(data.login);
    profile.setPassword(data.password);

    console.log(profile);

    var createAdminProfileIn = new ms.CreateAdminProfileIn();

    createAdminProfileIn.setProfile(profile);

    grpcClientAdminProfile.grpcClientAdminProfile.createAdminProfile(createAdminProfileIn, (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
            return
        }

        const response = `{Login ${data.login} Password: ${data.password}`;
        console.log(response)

        const cookieOptions = {
            maxAge: 10000 * 60,
            httpOnly: true,
            secure: false,
            path: '/',
        }

        res.cookie('session_id', data., cookieOptions)
    })


    res.send("good")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
