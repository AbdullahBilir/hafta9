import { useEffect, useState } from "react";

function AppJs({ ad }) {
  const [sayac, setSayac] = useState(0);

  useEffect(() => {
    console.log("1.efect çalıştı");
  }, [sayac]);
  useEffect(() => {
    console.log("2.efect çalıştı");
  });

  return <>{sayac}</>;
}

export default AppJs;
