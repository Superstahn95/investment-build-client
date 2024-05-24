import AliceCarousel from "react-alice-carousel";
import MemberCard from "./MemberCard";
const teamData = [
  {
    name: "George roberts",
    position: "founder",
    bio: "George is the innovative brain behing mining exchange. His idea empowered thousands of people and is still doing that now.",
    image:
      "https://cdn.pixabay.com/photo/2021/12/16/17/26/man-6874914_1280.jpg",
  },
  {
    name: "Allan gusto",
    position: "Co-Founder",
    bio: "All this wouldn't have been possible without good supportive people like Allan",
    image:
      "https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449_1280.jpg",
  },
  {
    name: "Greg Xanders",
    position: "Portfolio Director",
    bio: "In charge of thousands of users portfolio and a good counsel for prospective investors.",
    image:
      "https://cdn.pixabay.com/photo/2022/11/21/15/46/business-7607421_1280.jpg",
  },
  {
    name: "Owen greeves",
    position: "CTO",
    bio: "Expert in the fintech space and team lead in multiple fintech spaces.",
    image:
      "https://cdn.pixabay.com/photo/2019/08/14/09/53/consulting-4405260_1280.jpg",
  },
  {
    name: "April May",
    position: "Asset analyst",
    bio: "Professional in monitoring current trends for a profitable market venture setting.",
    image:
      "https://cdn.pixabay.com/photo/2017/04/03/17/42/secretary-2199013_1280.jpg",
  },
  {
    name: "John Lee",
    position: "Trade Director",
    bio: "Automates profitable trading processes and also assures client profitability",
    image:
      "https://cdn.pixabay.com/photo/2017/12/22/06/54/computer-3033135_1280.jpg",
  },
];

function Team() {
  const items = teamData.map((member) => (
    <MemberCard
      key={member.name}
      bio={member.bio}
      image={member.image}
      name={member.name}
      position={member.position}
    />
  ));
  const responsive = {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
  };
  return (
    <div className="font-montserrat bg-slate-100">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-xl md:text-6xl mt-7">Our Team</h2>
        <div className="w-[50px] md:w-[100px] h-[2px] bg-red-400 mt-4" />
        <div className="w-full md:w-[80%] p-4 mt-7">
          <AliceCarousel
            mouseTracking
            items={items}
            // autoPlay
            disableButtonsControls
            infinite
            animationDuration={1000}
            autoPlayInterval={3000}
            responsive={responsive}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
