const grpcClient = require('./profiles/client/client');
const express = require('express');

const app = express()
const port = 4000

app.use(express.json());

app.use(require('./routes'));

app.get('/', (req, res) => {

    res.send('Hello World!')
})

const crateProfileDynamic = () => {

}

const createProfile = async (createAdminProfileIn) => {
    return new Promise((resolve, reject) => {
        grpcClient.grpcClientAdminProfile.createAdminProfile(createAdminProfileIn, (error, createAdminProfileOut) => {
            if (error) reject(error);
            else resolve(createAdminProfileOut);
        });
    });


}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
