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
        darkMode ? "bg-neutral-900 text-white" : "bg-neutral-100 text-black"
      } flex justify-center items-center`}
    >
      <div className="max-w-[1400px] max-h-[1000px] h-full w-full flex justify-center py-10">
        <div
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-neutral-100 text-black"
          } h-[600px] flex items-center justify-center flex-col md:flex-row`}
        >
          <div
            className={`${darkMode ? "bg-green" : "bg-gray"} w-60 h-96`}
          ></div>
          <p className="w-2/3 md:p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            voluptatem pariatur recusandae minima sequi ipsum dolorum obcaecati
            delectus quaerat eligendi, expedita debitis dolorem beatae iure
            deserunt! Earum expedita officiis quam. Dicta labore repellendus
          </p>
        </div>
      </div>
      <div
        className={`max-w-[1200px] h-fit p-4 flex justify-center flex-col items-center 
          ${darkMode ? "  text-white" : "  text-black"}`}
      >
        <h1>mitä miksi</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim magni
          recusandae amet cumque deleniti explicabo mollitia, magnam velit cum
          error dolorum culpa unde! Distinctio ipsum quidem illo recusandae
          molestias et! Magnam ratione quae similique ullam, quis sapiente!
          Omnis, accusantium numquam consequatur totam possimus sequi
          reprehenderit quam porro doloremque fugit illum dolorum architecto id
          debitis nostrum consequuntur officiis! At, obcaecati iure.
        </p>
      </div>
    </div>
  );
}
