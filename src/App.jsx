import React, { useState } from 'react';

function App() {
  const [summary, setSummary] = useState("");
  const [quiz, setQuiz] = useState("");
  const [topic, setTopic] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("https://unibot-backend.onrender.com/upload/", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  const handleQuiz = async () => {
    const formData = new FormData();
    formData.append("topic", topic);
    const res = await fetch("https://unibot-backend.onrender.com/quiz/", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    setQuiz(data.quiz);
  };

  return (
    <div>
      <h1>UniBot Web</h1>
      <input type="file" onChange={handleUpload} />
      <p>{summary}</p>
      <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Argomento quiz" />
      <button onClick={handleQuiz}>Genera Quiz</button>
      <pre>{quiz}</pre>
    </div>
  );
}

export default App;
