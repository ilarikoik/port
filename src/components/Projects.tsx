import blg1 from "../assets/blg1.png";
import lentäjä from "../assets/lentäjä.png";
import mkob from "../assets/mkob.png";
import wrapped from "../assets/wrapped.png";
export default function Projects({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      id="projects"
      className="flex justify-center items-center flex-col py-20"
    >
      <h1
        className={`text-3xl font-semibold mb-12 ${
          !darkMode ? "text-green" : "text-blue-500"
        }`}
      >
        Projektit
      </h1>
      <div className="grid sm:grid-cols-2 max-w-[1200px] max-h-[1200px] h-full w-full mb-10">
        <div className="  h-fit w-full ">
          <div
            className="h-60 sm:h-80 rounded-lg m-5 border-2 border-gray"
            style={{
              backgroundImage: `url(${mkob})`,
              backgroundSize: "cover", // Skaalaa kuva täyttämään alue
              backgroundRepeat: "no-repeat", // Ei toistoa
              backgroundPosition: "center", // Keskittää kuvan
            }}
          >
            <div
              className={`h-full opacity-0 hover:opacity-95 hover:text-center ${
                !darkMode ? "hover:text-green" : "hover:text-blue-500"
              } hover:font-semibold hover:bg-black flex flex-col justify-center rounded-lg`}
            >
              <p>
                Tämän puhelinsovelluksen käyttäjänä voi selata tulevien
                elokuvien julkaisuajankohtia, tarkastella niiden arviointeja ja
                saada yleiskäsityksen mistä elokuva kertoo.
                <br />
                <br />
                Käyttäjä voi myös lisätä omalle katselulistalleen elokuvia ja
                arvioida sekä selata elokuvia omien arvioiden perusteella, jotta
                henkilökohtaiset suosikit löytyvät helposti.
                <br />
                Myös elokuvateatterit oman sijainnin perusteella löytyvät
                nopeasti.
                <br />
                <br />
                React Native, SQLite
              </p>
              <p className="mt-5">
                <a
                  target="_blank"
                  href="https://github.com/ilarikoik/mobiiliprojekti"
                >
                  [Github]
                </a>
              </p>
            </div>
          </div>
          <div
            className=" h-80 rounded-lg m-5 border-2 border-gray"
            style={{
              backgroundImage: `url(${lentäjä})`,
              backgroundSize: "cover", // Skaalaa kuva täyttämään alue
              backgroundRepeat: "no-repeat", // Ei toistoa
              backgroundPosition: "center", // Keskittää kuvan
            }}
          >
            <div
              className={`h-full opacity-0 hover:opacity-95 hover:text-center ${
                !darkMode ? "hover:text-green" : "hover:text-blue-500"
              } hover:font-semibold hover:bg-black flex flex-col justify-center rounded-lg`}
            >
              <p>
                Weatherapp on säätiedotuksia tarjoava sovellus
                ilmailuharrastajille. Sovelluksen kehittämisen tilasi
                ohjelmistoprojekti 2 kurssin lehtori, joka toimi sovelluksen ja
                koko projektin pääasiallisena ja ainoana tuotepäällikkönä.
                <br />
                <br />
                React, Javascript, CSS, MySQL.
              </p>
              <p className="mt-5">
                <a
                  target="_blank"
                  href="https://github.com/orgs/Ryhma-RED-Ohjelmistoprojekti-2/repositories"
                >
                  [Github]
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="  h-fit w-full ">
          <div
            className=" h-80 rounded-lg m-5 border-2 border-gray"
            style={{
              backgroundImage: `url(${wrapped})`,
              backgroundSize: "cover", // Skaalaa kuva täyttämään alue
              backgroundRepeat: "no-repeat", // Ei toistoa
              backgroundPosition: "center", // Keskittää kuvan
            }}
          >
            <div
              className={`h-full opacity-0 hover:opacity-95 hover:text-center ${
                !darkMode ? "hover:text-green" : "hover:text-blue-500"
              } hover:font-semibold hover:bg-black flex flex-col justify-center rounded-lg`}
            >
              <p>
                Tämä projekti mahdollistaa Spotify-käyttäjän henkilökohtaisen
                musiikkianalyysin. Käyttäjä voi ladata Spotifysta saamansa
                kuunteluhistorian Zip-tiedostona ja pudottaa ne suoraan
                sovellukseen. Sovellus analysoi tiedot ja näyttää visuaalisesti
                tärkeimmät musiikkitilastot, kuten: <br />
                Kappaleiden/Artistien/Podcastien kuunteluaika ja kuuntelukerrat
                <br />
                <br />
                React TypeScript, Tailwind & Java SpringBoot
              </p>
              <p className="mt-5">
                <a
                  target="_blank"
                  href="https://github.com/ilarikoik/wrappedfront/tree/main/wrappedfront"
                >
                  [Github]
                </a>
              </p>
            </div>
          </div>
          <div
            className=" h-80 rounded-lg m-5 border-2 border-gray"
            style={{
              backgroundImage: `url(${blg1})`,
              backgroundSize: "cover", // Skaalaa kuva täyttämään alue
              backgroundRepeat: "no-repeat", // Ei toistoa
              backgroundPosition: "center", // Keskittää kuvan
            }}
          >
            <div
              className={`h-full opacity-0 hover:opacity-95 hover:text-center ${
                !darkMode ? "hover:text-green" : "hover:text-blue-500"
              } hover:font-semibold hover:bg-black flex flex-col justify-center rounded-lg`}
            >
              <p>
                Tämä sovellus on luotu korkeakouluopiskelijoiden väliseen
                keskusteluun ja "blogimaisten" postauksien luomiseen.
                <br />
                Sovelluksessa käyttäjät voivat jakaa ajatuksiaan ja postauksiaan
                eri aiheista, keskustella muiden opiskelijoiden kanssa ja saada
                ideoita muilta korkeakouluopiskelijoilta.
                <br />
                <br />
                React, TypeScript, Tailwind. <br /> Firebase tarjoaa
                autentikoinnin ja tietokannan, jotta käyttäjät voivat luoda
                tilejä, kirjautua sisään ja tallentaa omat postauksensa
                pilvipalveluun.
              </p>
              <p className="mt-5">
                <a target="_blank" href="https://github.com/ilarikoik/blog">
                  [Github]
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
