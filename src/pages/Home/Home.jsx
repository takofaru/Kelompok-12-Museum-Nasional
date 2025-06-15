import CardView from "/components/CardView";
import artefakData from "/json/JsonArtefak.json"
import kegiatanData from "/json/JsonKegiatan.json"

function LandingSection() {
    return (
        <section className="landingSect">
            <div className="landingImage"></div>
            <div className="landingGradient">
                <div className="landingSolid"></div>
                <div className="landingFade"></div>
            </div>
            <div className="landingText">
                <h3>Selamat datang di</h3>
                <h1>Museum Nasional <br/> Indonesia</h1>
                <h3>Semua sejarah berada pada satu tempat</h3>
            </div>
        </section>
    );
}

function ArtefakOfTheDay() {
    const items = artefakData.artefak;
    const random = items[Math.floor(Math.random() * items.length)];

    return(
        <section className="artefakSect">
            <div className="artefakLeft">
                <img src={random.image} alt={random.nama} />
                <div className="artefakGradient"></div>
            </div>
            <div className="artefakRight">
                <h2>Artefak of The Day</h2>
                <h2>{random.nama}</h2>
            </div>
        </section>
    );
}

function Kegiatan() {
    const items = kegiatanData.kegiatan;
    return (
        <section>
            <div>
                {items.slice(0, 3).map((item) => (
                    <CardView
                        key={item.id}
                        title={item.nama} 
                        image={item.image} 
                    />
                ))}
            </div>
        </section>
    );
}

function Home() {
    return (
        <>
            <LandingSection />
            <ArtefakOfTheDay />
            <Kegiatan />
        </>
    );
}

export default Home;
