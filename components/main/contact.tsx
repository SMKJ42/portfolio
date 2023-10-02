import { api } from "@/utils/api";
import React, { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ErrorMessage from "../alerts/errorMessage";
import SuccessMessage from "../alerts/successMessage";

interface FormErrorProps {
    code: string | undefined;
    minLen: number;
    name: string;
}

export function Contact() {
    const name = useRef("");
    const email = useRef("");
    const message = useRef("");
    const fake_field = useRef("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<boolean | FormErrorProps>(false);

    const recaptchaRef = React.createRef<ReCAPTCHA>();

    console.log(error);

    const { mutate } = api.contact.createContact.useMutation({
        onSuccess: () => {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 2000);
        },
        onError: () => {
            setError(true);
        },
    });

    function handleSubmit(e: FormEvent<HTMLButtonElement>) {
        const recaptchaValue = recaptchaRef.current?.getValue();
        e.preventDefault();

        if (fake_field.current !== "") {
            //TODO: cache this in local storage, log the request on the server
            return;
        } else if (!!recaptchaValue) {
            //TODO: cache this in local storage, log the request on the server
            const data = {
                name: name.current,
                email: email.current,
                message: message.current,
                reCAPTCHA: recaptchaValue,
            };
            mutate({
                ...data,
            });
        } else {
            alert("Please fill out the reCAPTCHA");
        }
    }

    function closeError() {
        setError(false);
        console.log("hello");
    }

    function closeSuccess() {
        setSuccess(false);
    }

    console.log(error);

    return (
        <form
            className="px-8 py-4 rounded-xl border-gray-400 border w-full md:w-1/2 mx-8 flex flex-col"
            id="get_in_touch"
            onSubmit={(e: any) => {
                e.preventDefault();
                handleSubmit(e);
            }}
        >
            {error && <ErrorMessage close={closeError} />}
            {success && <SuccessMessage close={closeSuccess} />}
            <h2 className="text-3xl font-semibold mb-4 w-full text-center">
                Contact Me
            </h2>
            <div className="md:flex">
                <div className="w-full mr-4">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                        className="w-full rounded dark:text-black"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        minLength={2}
                        maxLength={50}
                        onChange={(e) => (name.current = e.target.value)}
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        className="w-full rounded dark:text-black invalid:border-red-600 invalid:text-red-600"
                        placeholder="example@email.com"
                        id="email"
                        name="email"
                        minLength={5}
                        maxLength={50}
                        onChange={(e) => (email.current = e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                    id="message"
                    className="w-full rounded dark:text-black h-32"
                    name="message"
                    minLength={10}
                    maxLength={500}
                    placeholder="Hi Liam, I'd like to talk about..."
                    onChange={(e) => (message.current = e.target.value)}
                    required
                />
            </div>
            <div className="hidden">
                <label htmlFor="other">something else</label>
                <input
                    name="other"
                    onChange={(e) => (fake_field.current = e.target.value)}
                />
            </div>
            <div className="flex flex-col items-center mt-4">
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={`6LeqRGMoAAAAAHFRsN3PPQLKE1taiGL-_iEJDvCl`}
                />
                <button
                    type="submit"
                    className="px-4 py-1 rounded-lg bg-cyan-800 text-white mt-4"
                    aria-label="Submit Contact Form"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
