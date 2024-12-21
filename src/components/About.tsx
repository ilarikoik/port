// { darkMode } --> (Tämä syntaksi purkaa props-objektin ja ottaa siitä darkMode-kentän)
// : { darkMode: boolean } --> kertoo mitä tyyppiä propsi on

// jos annettaisiin tioinen propsi missä ikä ja nimi
// export default function Henkilö({ nimi, ikä }: { nimi: string; ikä: number }) {
//   return (
//     <div>
//       <h1>{nimi}</h1>
//       <p>Ikä: {ikä}</p>
//     </div>
//   );
// }
// { nimi, ikä }: Tämä purkaa nimi ja ikä-kentät props-objektista, jolloin voit käyttää niitä suoraan komponentissa.

export default function About({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      className={`w-full h-fit flex flex-col font-semibold ${
        !darkMode ? "bg-neutral-900 text-white" : "bg-neutral-100 text-black"
      } flex justify-center items-center`}
    >
      <div className="max-w-[1400px] max-h-[1000px] h-full w-full flex justify-center py-10">
        <div
          className={`${
            !darkMode ? "bg-gray-800 text-white" : "bg-neutral-100 text-black"
          } h-[600px] flex items-center justify-center flex-col md:flex-row`}
        >
          <div
            id="about"
            className={`flex justify-center rounded-lg${
              !darkMode ? "bg-green" : "bg-gray"
            } w-60 h-96`}
          >
            <img
              src="https://i.pinimg.com/236x/d8/8a/49/d88a493028f91ddf83f43278fd196f1f.jpg"
              alt="Image"
              style={{
                width: "100%", // Aseta haluamasi leveys
                height: "auto", // Korkeus säilyttää kuvasuhteen
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </div>
          <p className="w-2/3 md:p-5">
            Olen{" "}
            <strong className={`${!darkMode ? "text-green" : "text-blue-500"}`}>
              [Nimesi]
            </strong>
            , kolmannen vuoden tietojenkäsittelyn opiskelija Haaga-Heliassa,
            erikoistuen ohjelmistokehitykseen.
            <br />
            <br />
            <p className={`${!darkMode ? "text-green" : "text-blue-500"}`}>
              React/React Native,Javascript, Typescript, Java, SQL
            </p>
          </p>
        </div>
      </div>
      <div
        className={`max-w-[1200px] h-fit p-4 flex justify-center flex-col items-center 
          ${!darkMode ? "  text-white" : "  text-black"}`}
      >
        <h1
          className={`text-2xl md:text-3xl ${
            !darkMode ? "text-green" : "text-blue-500"
          }`}
        >
          Mitä etsin?
        </h1>
        <p className="text-center">
          Etsin mahdollisuuksia päästä syventämään taitojani käytännössä ja
          kehittymään ohjelmistokehittäjänä. Erityisesti etsin
          harjoittelupaikkaa tai työpaikkaa, jossa voisin työskennellä käytännön
          projekteissa ja oppia kokeneemmilta ammattilaisilta. Lisäksi olen
          kiinnostunut opparin tekemisestä, jossa voin yhdistää opintojeni
          aikana oppimani ja tuoda uusia ideoita ja ratkaisukeskeistä ajattelua
          tiimiin.
        </p>
      </div>
    </div>
  );
}
