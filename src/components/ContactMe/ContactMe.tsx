import {MdOutlineMailOutline} from "react-icons/md";
import {Link} from "react-router";
import { useTranslation } from "react-i18next";



const ContactMe: React.FC = () => {
    const { t } = useTranslation();
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

export default ContactMe;
