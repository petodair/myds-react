import { Outlet } from "react-router";
import Layout from "./my/Layout";

function App() {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  );
}

export default App;
