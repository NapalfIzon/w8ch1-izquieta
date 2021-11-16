function Home() {
  return (
    <>
      <div className="home-container">
        <iframe
          className="home-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/R3Y525VJ4ZI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Home;
