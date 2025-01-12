import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router';

interface EmailJsProps {
    t: (key: string) => string;
}

export const EmailJs: React.FC<EmailJsProps> = ({ t }) => {
    const form = useRef<HTMLFormElement | null>(null);
    const [feedbackMessage, setFeedbackMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
                    form.current,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
                )
                .then(
                    () => {
                        setFeedbackMessage({
                            text: t('contact.success'),
                            type: 'success',
                        }); // Show success message
                        form.current?.reset(); // Reset the form
                        setTimeout(() => setFeedbackMessage(null), 5000); // Auto-hide after 5 seconds
                    },
                    (error) => {
                        setFeedbackMessage({
                            text: t('contact.error'),
                            type: 'error',
                        }); // Show error message
                        console.log('FAILED...', error.text);
                        setTimeout(() => setFeedbackMessage(null), 5000); // Auto-hide after 5 seconds
                    }
                );
        }
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center gap-4 mt-4">

                {/* Feedback Message */}
                {feedbackMessage && (
                    <div
                        className={`alert ${
                            feedbackMessage.type === 'success' ? 'alert-success' : 'alert-error'
                        } w-full max-w-xs`}
                    >
                        <span>{feedbackMessage.text}</span>
                    </div>
                )}


                <input
                    type="text"
                    name="from_name"
                    placeholder={t('contact.placeholder.name')}
                    className="input input-bordered w-full max-w-xs"
                    required
                />
                <input
                    type="email"
                    name="reply_to"
                    placeholder={t('contact.placeholder.email')}
                    className="input input-bordered w-full max-w-xs"
                    required
                />
                <textarea
                    name="message"
                    placeholder={t('contact.placeholder.message')}
                    className="textarea textarea-bordered w-full max-w-xs"
                    rows={4}
                    required
                ></textarea>
                <button type="submit" className="btn btn-primary">
                    {t('contact.button')}
                </button>
            </form>

            {/* Pagination  */}
            <div className="join flex justify-center py-6">
                <Link to="/aboutme" className="join-item btn bg-black opacity-80 text-white">«</Link>
                <button className="join-item btn bg-black opacity-80 text-white">
                    {t('pagination.contact')}
                </button>
            </div>
        </>
    );
};
