import { useTranslation } from 'react-i18next';
import { EmailJs } from './EmailJs'; // Adjust path as needed

const ContactMe: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <EmailJs t={t} />
        </>
    );
};

export default ContactMe;
