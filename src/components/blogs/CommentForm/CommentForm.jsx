import React, { useState } from "react";
import { db } from "../../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "./CommentForm.css";

const CommentForm = ({ blogId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!name || !email || !comment) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      // Add the comment to Firestore
      await addDoc(collection(db, "comments"), {
        blogId,
        name,
        email,
        comment,
        saveInfo,
        createdAt: new Date(),
      });

      toast.success("Comment submitted successfully!");
      setName("");
      setEmail("");
      setComment("");
      setSaveInfo(false);
    } catch (error) {
      toast.error("Error submitting comment: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-form-container">
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment *</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your Comment"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
