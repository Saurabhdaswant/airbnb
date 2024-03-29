import Image from "next/image";

function Card({ title, img }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out" >
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className=" text-xl font-semibold md:text-2xl mt-3" >{title}</h3>
    </div>
  );
}

export default Card;
