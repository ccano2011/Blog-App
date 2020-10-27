import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import PostCards from "../../components/PostCards/PostCards";

function Home() {
  return (
    <Layout>
      <div className="homepage">
       <PostCard/>
      </div>
    </Layout>
)  
}
export default Home;
