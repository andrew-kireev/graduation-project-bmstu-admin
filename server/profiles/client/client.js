const grpc = require("grpc");
const {AdminProfilesClient} = require("../protobuff/admin_profiles_grpc_pb");


const grpcClientAdminProfile = new AdminProfilesClient('127.0.0.1:7777', grpc.credentials.createInsecure());

module.exports = {
    grpcClientAdminProfile,
};
