import ImageSlider from "./ImageSlider";
export const LogoSlider = () => {
  const slides = [
    { url: "https://drive.google.com/uc?id=1ro3Mdbyj5GM_oEYKdiLxVBM8gZP4y3YI", title: "Wagon Tutors" },
    { url: "https://drive.google.com/uc?id=1BnElpVEGeaTzvOpE2O2lxM1pl79Qm21c", title: "Simp Heal" },
  ];
  const containerStyles = {
    width: "300px",
    height: "300px",
    margin: "0 auto",
  };
  const service_tittle={
    position: "relative",
    fontSize: "7vw",
    textAlign: "center",
    fontFamily: "'Poppins',sans-serif",
    fontWeight: "600",
    color:"var(--secondary-color)", 
    padding:"30px",
  };
  return (
    <div>
      <div style={service_tittle}>
      <h1>Our Customers</h1></div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};
