import axios from "axios";
import { useState } from "react";

export function Welcome() {

  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRunScript = async () => {
    if (!prompt) {
      alert('Both prompt and language are required!');
      return;
    }
    setLoading(true);
    try {
      // Make sure this URL points to your backend
      const response = await axios.post('http://localhost:5000/run', {
        script: prompt, // Only pass the script name without `.sh`
      });
      setOutput(response.data); // Display output of the script
    } catch (error) {
      setOutput('❌ Error running the script');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Run Script</h1>
      <div>
        <input
          type="text"
          placeholder="Enter script name (e.g., hello)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div>
      </div>
      <button onClick={handleRunScript} disabled={loading}>
        {loading ? 'Running...' : 'Run Script'}
      </button>

      {output && (
        <div>
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
}
