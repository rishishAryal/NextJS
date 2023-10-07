import React from "react";
import { useRouter } from "next/router";
const Slug = () => {
  const { slug } = useRouter().query;
  return <div>{slug}</div>;
};

export default Slug;
