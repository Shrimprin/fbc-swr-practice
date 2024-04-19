import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const fetcher = async (url) => {
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;
  return <p>Status : {data.description}</p>;
}

export default App;
