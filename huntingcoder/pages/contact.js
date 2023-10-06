import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ name: name, phone: phone, desc: desc, email: email });
    const dataa = { name: name, phone: phone, desc: desc, email: email };
    console.log(dataa);
    const res = await axios.post("http://localhost:3000/api/postcontact", {
      dataa,
    });

    const data = res.data;
    console.log(data);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {" "}
        <h1>Contact</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
