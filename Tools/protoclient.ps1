$DIR='GrpcTest/Protos'
$OUT_DIR='grpcreact/src/grpc'

$CC='Tools/protoc.exe'
$PLUGIN='protoc-gen-ts_proto=.\\Tools\\node_modules\\.bin\\protoc-gen-ts_proto.cmd'
$CFLAGS="-I=$DIR", "--ts_proto_out=$OUT_DIR", "--plugin=$PLUGIN", "--ts_proto_opt=esModuleInterop=true", "--ts_proto_opt=outputClientImpl=grpc-web"

& $CC $CFLAGS greet.proto
