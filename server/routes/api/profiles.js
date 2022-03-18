let router = require('express').Router();

const grpcClient = require("../../profiles/client/client");


router.post('/register', (req, res) => {
    const data = req.body

    grpcClient.client.CreateAdminProfile(
        {
            profile: {
                login: data.login,
                password: data.password,
            }

        }, (error, out) => {
            if (error) {
                console.log(error)

                res.status(401)
                res.send()
            } else {
                const cookieOptions = {
                    maxAge: 10000 * 60,
                    httpOnly: true,
                    secure: false,
                    path: '/',
                }

                res.cookie('session_id', out.session, cookieOptions)

                // res.redirect('main')
                res.send('{ura}')
            }
        })

})

router.post('/login', (req, res) => {
    const data = req.body

    grpcClient.client.LoginAdminProfile(
        {
            profile: {
                login: data.login,
                password: data.password,
            }

        }, (error, out) => {
            if (error) {
                console.log(error)

                res.status(401)
                res.send('fds')
            } else {

                console.log(out)

                const cookieOptions = {
                    maxAge: 10000 * 60,
                    httpOnly: true,
                    secure: false,
                    path: '/',
                }

                res.cookie('session_id', out.session, cookieOptions)

                // res.redirect('main')
                res.send('{ura}')
            }
        })

})

module.exports = router;
