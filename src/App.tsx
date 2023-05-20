import React, { useEffect, useState } from "react";
import { getData } from "./Api/get";
import "./App.css";
import ThumbnailCard from "./components/ThumbnailCard/ThumbnailCard";

function App() {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    const collectData = async () => {
      const newData = (await getData("/discover/movie")) as any;
      console.log(
        "🚀 ~ file: App.tsx:10 ~ collectData ~ newData:",
        newData.results
      );
      setMovies(newData.results);
    };
    collectData();
  }, []);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {movies &&
        movies.map(({ id, release_date, poster_path, original_title }) => (
          <React.Fragment key={id}>
            <ThumbnailCard
              imgSrc={`https://image.tmdb.org/t/p/w500${poster_path}`}
              cardSubTitle={release_date}
              cardTitle={original_title}
            />
          </React.Fragment>
        ))}
    </div>
  );
}

export default App;
