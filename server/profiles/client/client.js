const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var PROTO_PATH = __dirname + '/admin_profiles.proto';
// const {AdminProfilesClient} = require("../protobuff/admin_profiles_grpc_pb");


// const grpcClientAdminProfile = new AdminProfilesClient('127.0.0.1:7777', grpc.credentials.createInsecure());


const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
console.log(PROTO_PATH)

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const admin_profiles = grpc.loadPackageDefinition(packageDefinition).admin_profiles;

const client = new admin_profiles.AdminProfiles(
    "127.0.0.1:7777",
    grpc.credentials.createInsecure()
);

// const grpcDynamic = new

module.exports = {
    // grpcClientAdminProfile,
    client,
};
