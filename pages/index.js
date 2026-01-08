export default function Home() {
  return (
    <main style={{
      backgroundColor: "#f6f3ef",
      minHeight: "100vh",
      padding: "120px"
    }}>
      <h1 style={{
        fontFamily: "serif",
        fontSize: "64px",
        marginBottom: "20px"
      }}>
        Diva Boutique
      </h1>

      <p style={{
        fontSize: "18px",
        maxWidth: "500px",
        color: "#444"
      }}>
        Premium women’s shoes and bags designed for elegance,
        confidence, and modern luxury.
      </p>

      <a href="/shop">
        <button style={{
          marginTop: "40px",
          padding: "16px 40px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Shop Collection
        </button>
      </a>
    </main>
  );
}
