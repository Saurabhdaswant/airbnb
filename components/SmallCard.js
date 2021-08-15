import Image from "next/image";
function SmallCard({ distance, location, img }) {
  return (
    <div className="flex pr-5 place-items-center mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
      <div className=" relative h-16 w-16">
        <Image className="rounded-lg"  layout="fill" src={img} objectFit="contain" />
      </div>
      <div>
        <h2>{distance}</h2>
        <h3 className="text-gray-500" >{location}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
