import React, { useRef } from 'react';
import useForm from "./UseForm";
import './Contact.css'

export default function Contact() {
    const formElement = useRef(null);
    const additionalData = {
        sent: new Date().toISOString(),
    };

    const { handleSubmit, status, message } = useForm({
        form: formElement.current,
        additionalData,
    });

    if (status === "success") {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">{message}</div>
            </>
        );
    }

    if (status === "error") {
        return (
            <>
                <div className="text-2xl">Something bad happened!</div>
                <div className="text-md">{message}</div>
            </>
        );
    }

    return (
        <div className="contact">
            <form action="http://localhost:3002/messages" onSubmit={handleSubmit} method="POST" ref={formElement}>
                <label hmtlfor="email">From: </label>
                <input type="email" name="email" id="email" />

                <label hmtlfor="subject">Subject: </label>
                <input type="text" name="subject" id="subject" />

                <label hmtlfor="message">Message: </label>
                <textarea name="text" id="message" cols="30" rows="10" placeholder="Type Here..."></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </div >
    );
}