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

      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary d-flex gap-2 align-items-center">
          <IoIosSave className="fs-5 text-danger" />
          <span>Save Data</span>
        </button>
      </div>
    </>
  );
}

export default App;
