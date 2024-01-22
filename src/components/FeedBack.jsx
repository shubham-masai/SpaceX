import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[400px] md:w-[30%] sm:w-[45%] w-full md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
            {content}
        </p>
        <div className="flex flex-row">
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    {name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                    {title}
                </p>
            </div>
        </div>
    </div>
);

const FeedBack = () => (
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {
            [
                {
                    id: "feedback-1",
                    content:
                        "SpaceX is not just a space exploration company; it's a catalyst for the future. With their innovative vision and determination, they're propelling humanity toward new frontiers. Money is only a tool, but investing in SpaceX is investing in the limitless possibilities of our collective journey beyond the stars.",
                    name: "Elon Musk",
                    title: "Founder & Leader",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/612px-Elon_Musk_2015.jpg",
                },
                {
                    id: "feedback-2",
                    content:
                        "SpaceX's commitment to pushing the boundaries of space exploration is unparalleled. Their endeavors inspire us to dream bigger and reach further. Investing in SpaceX is an investment in the future of human exploration and technological advancement.",
                    name: "Michael",
                    title: "Astronaut and test pilot",
                    img: "https://img.lemde.fr/2022/04/01/0/0/2500/3062/664/0/75/0/df4caa4_1648802228970-axiomspace-michaellopezalegri-a-cgunn.jpeg",
                },
                {
                    id: "feedback-3",
                    content:
                        "In the vastness of space, SpaceX stands as a beacon of innovation. Their groundbreaking achievements redefine what's possible. Being part of the journey with SpaceX is not just witnessing history; it's actively shaping it. A financial journey with them is an investment in the evolution of humanity's cosmic narrative.",
                    name: "Marcus Rodriguez",
                    title: "Lead Mission Control Specialist",
                    img: "https://youthandfamilyinstitute.com/wp-content/uploads/2023/01/photo-1-marcus.png",
                }
            ].map((card) => <FeedbackCard key={card.id} {...card} />)
        }
    </div>
);

export default FeedBack;