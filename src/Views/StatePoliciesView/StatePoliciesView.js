import React from "react";
import { useEffect, useState } from "react";
import { getAllStatePolicies } from "../../utils/apiCalls";

const StatePoliciesView = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    getAllStatePolicies().then((data) => setPolicies(data.data.state));
  }, []);
  console.log(policies);
  return <h1>policies</h1>;
};

export default StatePoliciesView;
