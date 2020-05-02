import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" />
      </form>
    </div>
  );
};

const CreateProduct = () => {
  return (
    <div>
      <h1>Create product</h1>
      <form action="/api/v1/products" method="POST">
        <input type="text" name="name" placeholder="Product name" />
        <input type="number" name="price" placeholder="Product price" />
        <input type="hidden" name="time" value={new Date().toISOString()} />
        <input type="submit" />
      </form>
    </div>
  );
};

const ListProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/v1/products")
      .then((r) => r.data)
      .then(setProducts);
  }, []);

  return (
    <div>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <code>{JSON.stringify(p)}</code>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <Login />} />
    <Route exact path="/create" render={() => <CreateProduct />} />
    <Route exact path="/list" render={() => <ListProducts />} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
