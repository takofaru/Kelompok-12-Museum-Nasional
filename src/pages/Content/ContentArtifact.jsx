import { useParams } from "react-router-dom";
import artefakData from "/json/JsonArtefak.json";

function ArtefakPage() {
  const { id } = useParams();
  const artefak = artefakData.artefak.find(item => item.id === parseInt(id));

  if (!artefak) return <h1>404 - Artefak tidak ditemukan</h1>;

  return (
    <div className="artefakPage">
      <img src={artefak.image} alt={artefak.nama} className="artefakImage" />
      <h1>{artefak.nama}</h1>
      <p>{artefak.deskripsi}</p>
    </div>
  );
}

export default ArtefakPage;
