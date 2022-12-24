import React, { useRef } from 'react';
import useForm from "./UseForm";

const FORM_ENDPOINT = "http://localhost:3000/messages";

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
        <div class="contact">
            <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" ref={formElement}>
                <label for="email">From: </label>
                <input type="email" name="email" id="email" />

                <label for="subject">Subject: </label>
                <input type="text" name="subject" id="subject" />

                <label for="message">Message: </label>
                <textarea name="text" id="message" cols="30" rows="10" placeholder="Type Here..."></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </div >
    );
}