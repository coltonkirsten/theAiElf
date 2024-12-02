import { useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [name, setName] = useState("");
  const [recommendations, setRecommendations] = useState<string | null>(null);

  const fetchRecommendations = async () => {
    try {
      const result = await client.queries.getrec({
        name: name,
      });
      setRecommendations(JSON.stringify(result)); // Set the recommendations to display
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setRecommendations("Failed to fetch recommendations." + error);
    }
  };

  return (
    <main>
      <h1>Get Recommendations from Lambda</h1>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={fetchRecommendations}>Get Recommendations</button>
      </div>
      <div>
        <h2>Result:</h2>
        <pre>{recommendations || "No recommendations yet"}</pre>
      </div>
      <div>
        <img src="/elfie.png" alt="Recommendation Image" />
      </div>
    </main>
  );
}

export default App;