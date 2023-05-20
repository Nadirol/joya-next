import { logoDark } from "@/public/assets";
import { useTranslation } from "next-i18next"
import Image from "next/image";

const Loading = () => {
    const { t } = useTranslation('common');

    return (
        <div className="w-screen h-screen flex gap-8 flex-col items-center justify-center ">
            <Image src={logoDark} alt="brand logo" />
            <h1>{t('loading')}</h1>

        </div>
    )
};

export default Loading;