import React, { useEffect } from "react";
import { useRouter } from "next/router";
const myaccount = () => {
  const Router = useRouter();
  useEffect (()=>{
    if(localStorage.getItem('token') === null){
      Router.push('/')
    }
    },[])
  return <div></div>;
};

export default myaccount;
