import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";
import { useState } from "react";
import { useEffect } from "react";
function Routes() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("KenzieHub:Token");
    if (token) {
      setAutenticado(true);
    }
  }, [autenticado]);

  return (
    <Switch>
      <Route exact path="/">
        <Login autenticado={autenticado} setAutenticado={setAutenticado} />
      </Route>
      <Route exact path="/register">
        <Register autenticado={autenticado} />
      </Route>
      <Route exact path="/dashboard">
        <DashBoard autenticado={autenticado} />
      </Route>
    </Switch>
  );
}

export default Routes;
