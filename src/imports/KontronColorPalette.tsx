import imgImage1 from "../assets/1ccd0c630ece6eda96c6bbe7714769eec4989ad1.png";
import imgImage3 from "../assets/25de5a723f665d2d93a5aacf086161abf9479175.png";
import imgImage4 from "../assets/279c82ec79d871e6b6c721700f59eeac43a4ed0a.png";
import imgImage5 from "../assets/537023ac2da9ef4ef2f9a51097162e172f600c77.png";
import imgImage2 from "../assets/e271b2ffb9d8e10de3e69a0fabcef999ed229e72.png";

export default function KontronColorPalette() {
  return (
    <div
      className="bg-[#ebe5e5] relative size-full"
      data-name="KONTRON Color Palette"
    >
      <div
        className="absolute h-[913px] left-[173px] top-[159px] w-[1342px]"
        data-name="image 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage1}
        />
      </div>
      <div
        className="absolute h-[676px] left-[1565px] top-[159px] w-[1250px]"
        data-name="image 2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage2}
        />
      </div>
      <div
        className="absolute h-[796px] left-[2865px] top-[159px] w-[1297px]"
        data-name="image 3"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage3}
        />
      </div>
      <div
        className="absolute h-[873px] left-[173px] top-[1135px] w-[1333px]"
        data-name="image 4"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage4}
        />
      </div>
      <div
        className="absolute h-[463px] left-[1553px] top-[1135px] w-[1274px]"
        data-name="image 5"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage5}
        />
      </div>
    </div>
  );
}
