import React from "react";
import { useParams } from "react-router-dom";
import { decrypt } from "../utils";

const ItemInfo = () => {
  const { id } = useParams();
  const decrypted = decrypt(String(id));
  if (decrypted === "Error") return <>Dont Match anything</>;
  return <div>ItemInfo for {decrypted}</div>;
};

export default ItemInfo;
