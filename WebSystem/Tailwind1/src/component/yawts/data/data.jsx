
import AlexMorgan from "../assets/AlexMorgan.avif"
import SophieLee from "../assets/SophieLee.avif"
export const menuLinks = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Trainers", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
];

export const programs = [
    {
        id: 1,
        title: "Strength Training",
        description: "Build muscle and improve your full body strength.",
        icon: "🏋️",
        duration: "8 weeks",
        sessions: "24",
        highlights: [
            "Full body progression",
            "Strength-building circuits",
        ],
    },
    {
        id: 2,
        title: "Yoga Class",
        description: "Increase flexibility and relax your mind and body.",
        icon: "🧘",
        duration: "6 weeks",
        sessions: "18",
        highlights: [
            "Gentle mobility flow",
            "Breath-focused relaxation",
        ],
    },
    {
        id: 3,
        title: "Cardio Workout",
        description: "Boost endurance and improve heart health.",
        icon: "🏃",
        duration: "5 weeks",
        sessions: "20",
        highlights: [
            "High-energy intervals",
            "Endurance conditioning",
        ],
    },
];

export const trainers = [
    {
        name: "Alex Morgan",
        specialty: "Strength Coach",
        image: AlexMorgan,
    },
    {
        name: "Sophie Lee",
        specialty: "Yoga Trainer",
        image: SophieLee
    },
];

export const footerItems = ["About", "Classes", "Membership", "Support"];