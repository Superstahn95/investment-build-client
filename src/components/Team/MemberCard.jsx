/* eslint-disable react/prop-types */

function MemberCard({ name, position, bio, image }) {
  return (
    <div className=" mr-5 grid grid-cols-2 shadow-md min-h-[250px] bg-white">
      <div className="pl-4">
        <p className="capitalize text-red-400 text-xl">{position}</p>
        <p className="capitalize text-xl mt-2">{name}</p>
        <div className="w-[50px] md:w-[100px] h-[2px] bg-red-400 mt-2" />
        <p className="text-sm mt-7">{bio}</p>
      </div>
      <div className="">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default MemberCard;
