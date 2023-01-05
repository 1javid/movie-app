import React, { useRef, useState } from 'react';
import './Contact.css'

export default function Contact() {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3002/messages", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs)
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
    }

    return (
        <>
            <div className="contact">
                <form onSubmit={handleSubmit}>
                    <label hmtlfor="email">From: </label>
                    <input type="email" name="email" id="email"
                        onChange={handleChange} />

                    <label hmtlfor="subject">Subject: </label>
                    <input type="text" name="subject" id="subject"
                        onChange={handleChange} />

                    <label hmtlfor="message">Message: </label>
                    <textarea name="text" id="message" cols="30" rows="10" placeholder="Type Here..."
                        onChange={handleChange}></textarea>
                    <input type="submit" value="SUBMIT" />
                </form>
            </div >
        </>

    );
}