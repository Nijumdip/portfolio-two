import React from "react";

const AboutCard = () => {
    const aboutCard = [
        {
            _id: 1,
            name: "Web Design",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
            img: "https://placeimg.com/400/225/arch",
        },
        {
            _id: 2,
            name: "Web Development",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
            img: "https://placeimg.com/400/225/arch",
        },
        {
            _id: 3,
            name: "App Development",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
            img: "https://placeimg.com/400/225/arch",
      },
      {
        _id: 4,
        name: "Figma to Html",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
        img: "https://placeimg.com/400/225/arch",
      },
      {
        _id: 5,
        name: "Existing Site Re-development",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
        img: "https://placeimg.com/400/225/arch",
      },
      {
        _id: 6,
        name: "Management",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis? Deserunt perspiciatis unde magni.",
        img: "https://placeimg.com/400/225/arch",
    },
    ];

    return (
        <>
            <div class="max-w-sm p-6 bg-pink-100 rounded-lg shadow-md hover:bg-gray-100 flex flex-wrap items-center justify-center ">
                {aboutCard.map((card) => (
                    <div className="">
                        <p></p>
                        <h5 class="mb-2 text-xl font-bold">{card.name}</h5>
                    <p class="font-normal text-gray-700 mb-3">{card.description}</p>
                    </div>
                ))}
            </div>
            
        </>
    );
};

export default AboutCard;
