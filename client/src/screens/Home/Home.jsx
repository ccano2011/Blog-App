import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import PostCards from "../../components/PostCards/PostCards";

function Home() {
  return (
    <Layout>
      <div className="homepage"></div>
      <PostCards />
    </Layout>
  );
}
export default Home;
