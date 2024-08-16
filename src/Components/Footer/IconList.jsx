import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaPinterest } from "react-icons/fa6";

export const IconList = [
    {
        id: 1,
        icon: <FaFacebook fontSize="2em" style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}/>,
    },
    {
        id: 2,
        icon: <FaTwitter fontSize="2em" style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />,
    },
    {
        id: 3,
        icon: <FaLinkedin fontSize="2em" style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />,
    },
    {
        id: 4,
        icon: <FaInstagram fontSize="2em" style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />,
    },
    {
        id: 5,
        icon: <FaPinterest fontSize="2em" style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />,
    },
]