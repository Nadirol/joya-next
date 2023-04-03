import { galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6 } from "@/public/assets";
import { TFunction } from "i18next";
import Link from "next/link";
import Image from "next/image";

const Catalogue = ({ t }: { t: TFunction }) => {

    return (
        <div id="tours" className="flex gap-5 flex-col items-center text-center">
          <h1 className="text-neutral-900 font-semibold text-xl md:text-4xl">{t('toursCatalogue')}</h1>
          <h3 className="text-neutral-800 font-regular text-xs md:text-xl">{t('toursCatalogueHeading')}</h3>
          <Link href="/assets/JOYA_Catalogue_EN.pdf" target="_blank" className="bg-primary-regular hover:bg-primary-dark px-6 py-4 rounded-[30px] text-neutral-100 font-semibold text-base leading-5">
            {t('downloadCatalogue')}
          </Link>
          <div className="grid gap-3 grid-cols-3 ">
            <Image src={galleryImage1} alt="gallery image" className="rounded-xl" />
            <Image src={galleryImage2} alt="gallery image" className="rounded-xl" />
            <Image src={galleryImage3} alt="gallery image" className="rounded-xl" />
            <Image src={galleryImage4} alt="gallery image" className="rounded-xl" />
            <Image src={galleryImage5} alt="gallery image" className="rounded-xl"/>
            <Image src={galleryImage6} alt="gallery image" className="rounded-xl" />
          </div>
        </div>
    )
};

export default Catalogue;