# Requirements
- yarn
- netcore 6
- docker

# How to run
1. Execute in _Tools_ dir: ```yarn``` to install ts-proto generator
2. Execute ```./Tools/protoclient.ps1``` to generate client 
3. Execute ```docker-compose up``` to start Envoy
4. Execute ```dotnet run --project .\GrpcTest\GrpcTest.csproj``` to start GRPC server
5. Execute in _grpcreact_ dir: ```yarn```
6. Execute in _grpcreact_ dir: ```yarn start```

Observe browser Network tools for SayHello GRPC call 