// var ms = require('../protobuff/admin_profiles_pb');
var grpc = require("grpc");
const {AdminProfilesClient} = require("../protobuff/admin_profiles_grpc_pb");


const grpcClientAdminProfile = new AdminProfilesClient('127.0.0.1:8081', grpc.credentials.createInsecure());

// const test = () => {
//     const client = new AdminProfilesClient('127.0.0.1:8081', grpc.credentials.createInsecure());
//
//     var profile = new ms.AdminProfile();
//
//     profile.setLogin("andrew");
//     profile.setPassword("opfdsf");
//
//     console.log(profile);
//
//     var createAdminProfileIn = new ms.CreateAdminProfileIn();
//
//     createAdminProfileIn.setProfile(profile);
//
//     client.createAdminProfile(createAdminProfileIn, (err, data) => {
//         console.log(err)
//     });
// }


module.exports = {
    grpcClientAdminProfile,
};
