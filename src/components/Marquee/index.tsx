import Marquee from "react-fast-marquee";

export default function Example() {
  return (
    <Marquee speed={70}
      pauseOnHover
      gradient={true}
      gradientColor="#4085cb"
      gradientWidth={100}

    >
      <span className="mx-6 font-montserrat-black-italic text-[100px] text-white">SURF</span>
      <span className="mx-6 font-montserrat-black-italic text-[100px] text-white">MAR</span>
      <span className="mx-6 font-montserrat-black-italic text-[100px] text-white">PRAIA</span>
      <span className="mx-6 font-montserrat-black-italic text-[100px] text-white">CLIMA</span>
      <span className="mx-6 font-montserrat-black-italic text-[100px] text-white">SAÚDE</span>
    </Marquee>
  );
}
