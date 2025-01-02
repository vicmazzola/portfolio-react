import Type from "../Type/Type.tsx";
import {useTranslation} from "react-i18next";


export default function Home() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <p className="text-3xl text-white text-center my-6">
                {t("home.hello")}
            </p>
            <p className="text-2xl text-white text-center my-12">
                {t("home.name")}
            </p>
            <div className="text-2xl text-white text-center">
                <Type
                    strings={[
                        t("home.roles.developer"),
                        t("home.roles.helpdesk"),
                    ]}
                />
            </div>
        </>
    );
}

