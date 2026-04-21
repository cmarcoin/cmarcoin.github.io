module.exports = {


  content: [
  "./index.html",
  "./header.html", // Indispensable si tu injectes ce fichier !
  "./*.js",
  "./css/**/*.css"
],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1F5E3B",
          coral: "#E76F51",
          "primary-light": "#D0F3BC",
          "coral-light": "#FFC4B5",
          text: "#1A1A1A",
          "text-secondary": "#4F4F4F",
          border: "#E5E7EB",
          background: "#FBFAF9",
          beige: "#FAF3EB",
          accent: "#34C759"
        }
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["DM Sans", "sans-serif"]
      },
      borderRadius: {
        brand: "12px",
        pill: "999px",
        card: "20px",
        xl2: "24px",
        xl3: "28px"
      },
      boxShadow: {
        brand: "0 10px 30px rgba(0,0,0,0.06)",
        soft: "0 6px 24px rgba(0,0,0,0.05)",
        hover: "0 14px 40px rgba(0,0,0,0.08)"
      },
      maxWidth: {
        site: "1280px"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};