export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Leather Heel",
      price: "3200 EGP",
      image:
        "https://images.unsplash.com/photo-1528701800489-20be3c9a19c7"
    },
    {
      id: 2,
      name: "Luxury Handbag",
      price: "4500 EGP",
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e"
    }
  ];

  return (
    <main style={{ background: "#f6f3ef", minHeight: "100vh", padding: "100px" }}>
      <h1 style={{ fontSize: "48px", fontFamily: "serif", marginBottom: "60px" }}>
        Collection
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "40px"
      }}>
        {products.map(p => (
          <div key={p.id} style={{ background: "#fff", padding: "20px" }}>
            <img
              src={p.image}
              style={{ width: "100%", height: "320px", objectFit: "cover" }}
            />
            <h3 style={{ marginTop: "20px", fontFamily: "serif" }}>
              {p.name}
            </h3>
            <p style={{ marginTop: "10px" }}>{p.price}</p>

            <a href="/checkout">
              <button style={{
                marginTop: "20px",
                padding: "12px 24px",
                background: "#000",
                color: "#fff",
                border: "none",
                cursor: "pointer"
              }}>
                Buy Now
              </button>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
