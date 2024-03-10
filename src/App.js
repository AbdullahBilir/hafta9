import { useEffect, useState } from "react";

function AppJs({ ad }) {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setdata(data);
      setloading(false);
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {loading && <p>Yükleniyor..</p>}
      {data.map((kişi) => (
        <p key={kişi.id}>{kişi.name}</p>
      ))}
    </>
  );
}

export default AppJs;
