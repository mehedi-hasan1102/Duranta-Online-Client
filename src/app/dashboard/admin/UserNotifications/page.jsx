import React, { useState } from "react";

const initialFeedback = [
  { id: 1, name: "John Doe", message: "Great service!" },
  { id: 2, name: "Jane Smith", message: "My connection is slow." },
];

function FeedbackNotifications() {
  const [feedbacks, setFeedbacks] = useState(initialFeedback);
  const [newFeedback, setNewFeedback] = useState({ name: "", message: "" });

  const submitFeedback = () => {
    if (!newFeedback.name || !newFeedback.message) return;
    setFeedbacks([...feedbacks, { ...newFeedback, id: Date.now() }]);
    setNewFeedback({ name: "", message: "" });
    alert("New feedback submitted!");
  };

  return (
    <div>
      <h2>Feedback Notifications</h2>
      <div>
        <input placeholder="Name" value={newFeedback.name} onChange={(e) => setNewFeedback({ ...newFeedback, name: e.target.value })} />
        <input placeholder="Message" value={newFeedback.message} onChange={(e) => setNewFeedback({ ...newFeedback, message: e.target.value })} />
        <button onClick={submitFeedback}>Submit Feedback</button>
      </div>
      <ul>
        {feedbacks.map((fb) => (
          <li key={fb.id}>{fb.name}: {fb.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackNotifications;
