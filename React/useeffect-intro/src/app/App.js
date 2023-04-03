import React from "react";
import Layout from "../layout/Layout";
import PostList from "../components/PostList/PostList";
import "../style/global.css";
const App = () => {
  return (
    <Layout>
      <PostList />
    </Layout>
  );
};
   
export default App;
