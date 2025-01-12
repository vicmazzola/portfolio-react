import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from "react-router";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <form className="flex flex-col items-center gap-4 mt-4">
                <input
                    type="text"
                    placeholder={t("contact.placeholder.name")}
                    className="input input-bordered w-full max-w-xs"
                    required
                />
                <input
                    type="email"
                    placeholder={t("contact.placeholder.email")}
                    className="input input-bordered w-full max-w-xs"
                    required
                />
                <textarea
                    placeholder={t("contact.placeholder.message")}
                    className="textarea textarea-bordered w-full max-w-xs"
                    rows={4}
                    required
                ></textarea>
                <button type="submit" className="btn btn-primary">
                    {t("contact.button")}
                </button>
            </form>

            <div className="join flex justify-center py-6">
                <Link to="/aboutme" className="join-item btn bg-black opacity-80 text-white">«</Link>
                <button className="join-item btn bg-black opacity-80 text-white">{t("pagination.contact")}</button>
            </div>
        </>

    );
};