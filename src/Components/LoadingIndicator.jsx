import { ClipLoader } from "react-spinners";

export default function LoadingIndicator({ isLoading }) {
  const override = {
    display: "block",
    margin: "0 auto",
    size: 15,
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div
        className="loader-box"
        style={{
          padding: "5%",
          height: "40wh",
          borderRadius: "20px",
          boxShadow: " 2px 2px 7px 5px rgba(0,0,0,0.1)",
          width: "30vw",
        }}
      >
        <ClipLoader
          loading={isLoading}
          cssOverride={override}
          size={150}
          color="#1d75e0"
        />
      </div>
    </div>
  );
}
