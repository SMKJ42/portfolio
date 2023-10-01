import { api } from "@/utils/api";
import React, { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const fake_field = useRef("");

    const recaptchaRef = React.createRef<ReCAPTCHA>();

    const { mutate } = api.contact.createContact.useMutation();

    function handleSubmit(e: FormEvent<HTMLButtonElement>) {
        const recaptchaValue = recaptchaRef.current?.getValue();
        e.preventDefault();

        if (fake_field.current !== "") {
            //TODO: cache this in local storage, log the request on the server
            return;
        } else if (!!recaptchaValue) {
            //TODO: cache this in local storage, log the request on the server
            mutate({
                name,
                email,
                message,
            });
            console.log(name, email, message);
        }
    }

    // if (isSuccess) {
    //     alert(
    //         "Thanks for reaching out! I'll get back to you as soon as I can."
    //     );
    // }

    return (
        <form className="px-8 w-full md:w-1/2" id="get_in_touch">
            <div className="md:flex">
                <div className="w-full mr-4">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                        type="text"
                        className="w-full rounded dark:text-black"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        type="email"
                        className="w-full rounded dark:text-black"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                    id="message"
                    className="w-full rounded dark:text-black"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div className="hidden">
                <label htmlFor="other">something else</label>
                <input
                    name="other"
                    onChange={(e) => (fake_field.current = e.target.value)}
                />
            </div>
            <div className="flex flex-col items-center">
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={`6LeqRGMoAAAAAHFRsN3PPQLKE1taiGL-_iEJDvCl`}
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                    aria-label="Submit Contact Form"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
