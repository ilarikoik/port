import { dark } from "@mui/material/styles/createPalette";

export default function Contact({ darkMode }: { darkMode: boolean }) {
  const send = () => {
    location.reload();
  };
  return (
    <form
      target="_blank"
      action="https://formsubmit.co/2b09ad9c2bbcfd8e3857e1e960123422"
      method="POST"
    >
      <div className="h-fit p-2 w-full  flex flex-col justify-center items-center">
        <h1
          className={`text-2xl p-2 ${
            !darkMode ? " text-green " : "text-blue-500"
          }`}
        >
          Ota yhteyttä
        </h1>
        <div className="flex w-full max-w-[1000px] flex-col">
          <input
            className={` p-2 mb-2 rounded-lg ${
              !darkMode ? "bg-neutral-700 " : "bg-neutral-300"
            }`}
            type="text"
            name="Email"
            placeholder="Email"
          />
          <input
            className={` p-2 mb-2 rounded-lg ${
              !darkMode ? "bg-neutral-700" : "bg-neutral-300"
            }`}
            type="text"
            name="Title"
            placeholder="Title"
          />
          <textarea
            className={` p-2 mb-2 rounded-lg ${
              !darkMode ? "bg-neutral-700" : "bg-neutral-300"
            }`}
            placeholder="Message"
            name="Message"
            cols={10}
            rows={10}
          />
          <button
            className={`w-full  rounded-md p-2 ${
              !darkMode ? "bg-green" : "bg-blue-500"
            }`}
            onClick={send}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
// 2b09ad9c2bbcfd8e3857e1e960123422