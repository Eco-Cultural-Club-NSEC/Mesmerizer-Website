import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./preloader.css";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red"
};

function Preoader() {
  let [loading, setLoading] = useState(true);

  //controling the loading state
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div className="sweet-loading">
      <HashLoader
        color={"#36d7b7"}
        loading={loading}
        cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1.3}
      />
    </div>
  );
}

export default Preoader;
