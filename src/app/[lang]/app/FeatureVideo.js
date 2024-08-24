export default function FeatureVideo({ video, ...delegated }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem 0 2rem",
      }}
    >
      <div style={{ borderRadius: "5px", overflow: "hidden" }}>
        <video controls width="800" autoPlay muted {...delegated}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
