import React, { useEffect } from "react";
import { useRouter } from "next/router";

import EditMazadScreen from "../../components/EditMazad/EditMazadScreen";
import Navbar from "../../components/Navbar/Navbar";


const EditMazad = () => {
  const router = useRouter();
  useEffect(() => {
  }, []);
  return (
    <>
      <Navbar />
      {router.query.id && <EditMazadScreen id={router.query.id} />}
    </>
  );
};

export default EditMazad;
