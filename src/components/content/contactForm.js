import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
    padding-right: 20rem;
    position: relative;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.4rem;
    padding: 1rem;
    margin-right: 2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: 1px solid black;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: pink;
    color: white;
    width: 250px;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCopmpanySize] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
                marginRight: "80px",
                marginLeft: "-80px",
                paddingRight: "40px",
                marginTop: "-40px",
                color: "red",
              }}
            >
              *
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
                marginRight: "80px",
                marginLeft: "-80px",
                paddingRight: "50px",
                marginTop: "-40px",
                color: "red",
              }}
            >
              *
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="companyName">
            Company Name
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
                marginRight: "30px",
                paddingRight: "40px",
                marginTop: "-40px",
                color: "red",
              }}
            >
              *
            </div>
            <input
              required
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="companyName">
            Company Size
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
                marginRight: "80px",
                paddingRight: "40px",
                marginTop: "-40px",
                color: "red",
              }}
            >
              *
            </div>
            <select
              required
              type="text"
              id="companySize"
              name="companySize"
              value={companySize}
              onChange={(e) => setCopmpanySize(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "8px",
                fontSize: "1.4rem",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="Large">Large</option>
              <option value="mnc">MNC</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="companyName">
            Country or Region
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "center",
                paddingRight: "20px",
                marginTop: "-40px",
                color: "red",
              }}
            >
              *
            </div>
            <select
              required
              type="text"
              id="companySize"
              name="companySize"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "8px",
                fontSize: "1.4rem",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <option value="1">India</option>
              <option value="2">USA</option>
              <option value="3">UK</option>
              <option value="4">Canada</option>
              <option value="4">France</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
    </>
  );
}
