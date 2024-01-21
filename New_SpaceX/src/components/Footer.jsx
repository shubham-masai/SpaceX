import { logo, instagram, facebook, twitter, linkedin } from "../assets";

const Footer = () => {
    return (
        <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
            <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
                <div className="flex-[1] flex flex-col justify-start mr-10">
                    <img
                        src={logo}
                        alt="SpaceX"
                        className="w-[266px] h-[72.14px] object-contain"
                    />
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
                        Revolutionizing space exploration with innovative technology and a
                        commitment to affordability and reliability.
                    </p>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerlink) => (
                        <div
                            key={footerlink.title}
                            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
                        >
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {footerlink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerlink.links.map((name, index) => (
                                    <li
                                        key={name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-blue-500 cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                            }`}
                                    >
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                    Copyright Ⓒ 2024 SpaceX. All Rights Reserved.
                </p>

                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                }`}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const footerLinks = [
    {
        title: "Useful Links",
        links: ["Content", "How it Works", "Create", "Explore", "Terms & Services"],
    },
    {
        title: "Community",
        links: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"],
    },
    {
        title: "Partner",
        links: ["Our Partner", "Become a Partner"],
    },
];

const socialMedia = [
    {
        id: "Instagram",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "Facebook",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "Twitter",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "Linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export default Footer;