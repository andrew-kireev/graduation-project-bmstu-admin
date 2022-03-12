var grpcClientAdminProfile = require('./profiles/client/client')
var express = require('express')
var ms = require('./profiles/protobuff/admin_profiles_pb');

const app = express()
const port = 4000

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


    grpcClientAdminProfile.createAdminProfile(ms.createAdminProfileIn, (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
            return
        }

        console.log(data)

    });

    const response = `{Login ${data.login} Password: ${data.password}`;
    console.log(response)

    // res.send(response)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
