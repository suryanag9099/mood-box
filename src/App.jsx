import React, { useState } from "react";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        top:0,
        left:0,
        width: "100vw",
        height: "100vh",
        position:"fixed",
        overflow:"hidden",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #ffdde1)",
      }}
    >
      <MoodTracker />
    </div>
  );
}

function MoodTracker() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);

  const addMood = () => {
    if (mood.trim() && note.trim()) {
      const newEntry = { mood, note };
      setHistory([newEntry, ...history]); // Correctly updating history
      setMood(""); // Reset mood input
      setNote(""); // Reset note input
    } else {
      alert("Please enter both mood and note!");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.9)",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        width: "350px",
      }}
    >
      <h1 style={{ color: "#333" }}>Mood Tracker 😊</h1>
      <div style={{ margin: "20px auto", textAlign: "left" }}>
        <input
          type="text"
          placeholder="Enter your mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          style={{
            width: "85%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            outline: "none",
            transition: "0.3s",
          }}
        />
        <textarea
          placeholder="Add a note about your mood"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{
            width: "85%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            outline: "none",
            transition: "0.3s",
          }}
        />
        <button
          onClick={addMood}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "darkgreen")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
        >
          Log Mood
        </button>
      </div>

      <h2 style={{ color: "#333", marginTop: "15px" }}>Mood History</h2>
      <div>
        {history.length > 0 ? (
          history.map((entry, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f2f2f2",
                margin: "10px auto",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
                textAlign: "left",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <strong style={{ color: "green" }}>{entry.mood}:</strong> {entry.note}
            </div>
          ))
        ) : (
          <p>No moods logged yet.</p>
        )}
      </div>
    </div>
  );
}
