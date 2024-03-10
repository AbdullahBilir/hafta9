import { useEffect, useState } from "react";
import Kisi from "./kişi";
import Skleton from "./skeleton";

function AppJs() {
  const [veri, veriGuncelle] = useState([]);
  const [loading, setloading] = useState("true");

  useEffect(() => {
    const LsVericek = async () => localStorage.getItem("rehberJSON");

    async function rehberCek() {
      const rehberJSON = await LsVericek();
      const rehberVeri = JSON.parse(rehberJSON);

      veriGuncelle(rehberVeri);
      setloading(false);
    }

    setTimeout(rehberCek, 2000);
  }, []);

  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>

        <div className="row">
          {loading && <Skleton />}
          {veri.map((eleman) => (
            <Kisi key={eleman.id} ad={eleman.ad} tel={eleman.tel} />
          ))}
        </div>
      </section>
    </>
  );
}

export default AppJs;
