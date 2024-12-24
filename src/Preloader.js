import React from "react";
import { BounceLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div style={styles.loaderContainer}>
      <BounceLoader color="#3498db" size={60} />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6", // Optional: Adjust to match your app
  },
};

export default Preloader;