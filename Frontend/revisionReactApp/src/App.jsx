import { FaWifi } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

import contactPage from "./assets/contactPage.png";

function App() {
  return (
    <>
      <div className="bg-primary p-2 text-light text-center fs-5">
        <FaWifi /> <span>My Revision App</span>
      </div>

      <img src={contactPage} alt="" className="w-100" />

    </>
  );
}

export default App;
