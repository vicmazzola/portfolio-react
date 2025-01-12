import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router'; // Corrected import

interface EmailJsProps {
    t: (key: string) => string; // Prop type for translation function
}

export const EmailJs: React.FC<EmailJsProps> = ({ t }) => {
    const form = useRef<HTMLFormElement | null>(null);

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
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center gap-4 mt-4">
                <input
                    type="text"
                    name="user_name"
                    placeholder={t('contact.placeholder.name')}
                    className="input input-bordered w-full max-w-xs"
                    required
                />
                <input
                    type="email"
                    name="user_email"
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

            <div className="join flex justify-center py-6">
                <Link to="/aboutme" className="join-item btn bg-black opacity-80 text-white">«</Link>
                <button className="join-item btn bg-black opacity-80 text-white">
                    {t('pagination.contact')}
                </button>
            </div>
        </>
    );
};
