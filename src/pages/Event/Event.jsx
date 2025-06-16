import "./Event.css";
import "../../components/CardView.css";
import CardView from "../../components/CardView";
import kegiatanData from "../../json/JsonKegiatan.json";

function Collection() {
  return (
    <div className="Event-page">
      <h1 className="Event-title">Koleksi</h1>
      <div className="Event-grid">
        {kegiatanData.kegiatan.map((item) => (
          <CardView
            key={item.id}
            title={item.nama}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Collection;