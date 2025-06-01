import Image, { StaticImageData } from "next/image";

interface IBannerProps {
  cover: string | StaticImageData;
  title?: string;
}

const NSBanner = ({ cover, title }: IBannerProps) => {
  return (
    <>
      <div className=" relative w-full mb-10">
        <div className="relative w-full h-[388px]">
          <Image
            src={cover}
            alt="Website banner cover image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className=" absolute top-20 text-white font-bold lg:font-extrabold text-3xl lg:text-[40px] text-center w-full uppercase leading-10 lg:leading-14 font-openSans">
          {title}
        </h1>
      </div>
    </>
  );
};

export default NSBanner;
