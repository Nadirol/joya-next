import { useTranslation } from "next-i18next"
import { NextSeo } from "next-seo";
import Link from "next/link";

const ErrorPage = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <NextSeo 
                title="404"
                nofollow={true}
                noindex={true}
            />
            <div className="w-screen h-screen flex gap-8 flex-col items-center justify-center">
                <h1 className="text-primary-regular font-semibold text-2xl md:text-[8rem] tracking-wide mb-4">404</h1>
                <h2 className="text-neutral-900 font-semibold text-xl md:text-3xl">OOPS! PAGE NOT FOUND</h2>
                <p className="text-neutral-800 font-normal text-base md:text-xl">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/" className="px-12 py-4 bg-primary-regular hover:bg-primary-dark text-neutral-100 font-medium text-xl md:text-2xl rounded-[30px]">
                RETURN HOME
                </Link>
            </div>
        </>

    )
};

export default ErrorPage;