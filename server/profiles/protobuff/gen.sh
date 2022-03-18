yarn add grpc-tools

# In package.json scripts...
grpc_tools_node_protoc \
  --grpc_out=. \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  admin_profiles.proto
