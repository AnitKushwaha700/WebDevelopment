import { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

import contactPage from "./assets/contactPage.png";

function App() {
  const [count, setCount] = useState(0);

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

      {/* Counter Section */}
      <div className="text-center mt-4">
        <h3>Counter: {count}</h3>

        <button
          className="btn btn-success me-2"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>


      </div>
    </>
  );
}

export default App;