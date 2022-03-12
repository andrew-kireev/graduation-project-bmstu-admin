// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var admin_profiles_pb = require('./admin_profiles_pb.js');

function serialize_admin_profiles_CreateAdminProfileIn(arg) {
  if (!(arg instanceof admin_profiles_pb.CreateAdminProfileIn)) {
    throw new Error('Expected argument of type admin_profiles.CreateAdminProfileIn');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_profiles_CreateAdminProfileIn(buffer_arg) {
  return admin_profiles_pb.CreateAdminProfileIn.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_profiles_CreateAdminProfileOut(arg) {
  if (!(arg instanceof admin_profiles_pb.CreateAdminProfileOut)) {
    throw new Error('Expected argument of type admin_profiles.CreateAdminProfileOut');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_profiles_CreateAdminProfileOut(buffer_arg) {
  return admin_profiles_pb.CreateAdminProfileOut.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_profiles_LoginAdminProfileIn(arg) {
  if (!(arg instanceof admin_profiles_pb.LoginAdminProfileIn)) {
    throw new Error('Expected argument of type admin_profiles.LoginAdminProfileIn');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_profiles_LoginAdminProfileIn(buffer_arg) {
  return admin_profiles_pb.LoginAdminProfileIn.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_profiles_LoginAdminProfileInOut(arg) {
  if (!(arg instanceof admin_profiles_pb.LoginAdminProfileInOut)) {
    throw new Error('Expected argument of type admin_profiles.LoginAdminProfileInOut');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_profiles_LoginAdminProfileInOut(buffer_arg) {
  return admin_profiles_pb.LoginAdminProfileInOut.deserializeBinary(new Uint8Array(buffer_arg));
}


var AdminProfilesService = exports.AdminProfilesService = {
  createAdminProfile: {
    path: '/admin_profiles.AdminProfiles/CreateAdminProfile',
    requestStream: false,
    responseStream: false,
    requestType: admin_profiles_pb.CreateAdminProfileIn,
    responseType: admin_profiles_pb.CreateAdminProfileOut,
    requestSerialize: serialize_admin_profiles_CreateAdminProfileIn,
    requestDeserialize: deserialize_admin_profiles_CreateAdminProfileIn,
    responseSerialize: serialize_admin_profiles_CreateAdminProfileOut,
    responseDeserialize: deserialize_admin_profiles_CreateAdminProfileOut,
  },
  loginAdminProfile: {
    path: '/admin_profiles.AdminProfiles/LoginAdminProfile',
    requestStream: false,
    responseStream: false,
    requestType: admin_profiles_pb.LoginAdminProfileIn,
    responseType: admin_profiles_pb.LoginAdminProfileInOut,
    requestSerialize: serialize_admin_profiles_LoginAdminProfileIn,
    requestDeserialize: deserialize_admin_profiles_LoginAdminProfileIn,
    responseSerialize: serialize_admin_profiles_LoginAdminProfileInOut,
    responseDeserialize: deserialize_admin_profiles_LoginAdminProfileInOut,
  },
  logoutAdminProfile: {
    path: '/admin_profiles.AdminProfiles/LogoutAdminProfile',
    requestStream: false,
    responseStream: false,
    requestType: admin_profiles_pb.LoginAdminProfileIn,
    responseType: admin_profiles_pb.LoginAdminProfileInOut,
    requestSerialize: serialize_admin_profiles_LoginAdminProfileIn,
    requestDeserialize: deserialize_admin_profiles_LoginAdminProfileIn,
    responseSerialize: serialize_admin_profiles_LoginAdminProfileInOut,
    responseDeserialize: deserialize_admin_profiles_LoginAdminProfileInOut,
  },
};

exports.AdminProfilesClient = grpc.makeGenericClientConstructor(AdminProfilesService);
