import { useParams } from "react-router-dom";
import kegiatanData from "/json/JsonKegiatan.json";

function KegiatanPage() {
  const { id } = useParams();
  const kegiatan = kegiatanData.kegiatan.find(item => item.id === parseInt(id));

  if (!kegiatan) return <h1>404 - Kegiatan tidak ditemukan</h1>;

  return (
    <div className="kegiatanPage">
      <img src={kegiatan.image} alt={kegiatan.nama} className="kegiatanImage" />
      <h1>{kegiatan.nama}</h1>
      <p>{kegiatan.deskripsi}</p>
    </div>
  );
}

export default KegiatanPage;

