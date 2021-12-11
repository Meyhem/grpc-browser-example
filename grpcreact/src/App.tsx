import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GrpcWebImpl, GreeterClientImpl } from "./grpc/greet";

function App() {
  useEffect(() => {
    async function fetch() {
      const transport = new GrpcWebImpl("http://localhost:8080", {});
      const client = new GreeterClientImpl(transport);
      const reply = await client.SayHello({ name: "John Doe" });
      console.log(reply);
    }
    fetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
