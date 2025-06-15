import CardView from "/components/CardView";
import artefakData from "/json/JsonArtefak.json"
import kegiatanData from "/json/JsonKegiatan.json"
import "./Home.css"


function LandingSection() {
    return (
        <section>
            <div className="contentSect">
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
            </div>
        </section>
    );
}

function ArtefakOfTheDay() {
    const items = artefakData.artefak;
    const random = items[Math.floor(Math.random() * items.length)];

    return(
        <section>
            <div className="contentSect">
                <div className="artefakLeft">
                    <img src={random.image} alt={random.nama} />
                    <div className="artefakGradient"></div>
                </div>
                <div className="artefakRight">
                    <h2>Artefak of The Day</h2>
                    <h2>{random.nama}</h2>
                </div>
            </div>
        </section>
    );
}

function Kegiatan() {
    const items = kegiatanData.kegiatan;
    return (
        <section>
            <div className="contentSect">
                <h2>Kegiatan di Museum Nasional</h2>
                <div className="listKegiatan">
                    {items.slice(0, 3).map((item) => (
                        <CardView
                            key={item.id}
                            title={item.nama} 
                            image={item.image} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Home() {
    return (
        <>
            <div className="homePage">
                <LandingSection />
                <ArtefakOfTheDay />
                <Kegiatan />
            </div>
        </>
    );
}

export default Home;
