import {
    FaLinkedin,
    FaXTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaGithub,
    FaBehance,
    FaDribbble,
    FaTiktok,
    FaSnapchat,
    FaGlobe,
} from "react-icons/fa6";

import type { IconType } from "react-icons";

export interface SocialConfig {
    label: string;
    Icon: IconType;
}

export const SOCIAL_CONFIG: Record<string, SocialConfig> = {
    linkedin: { label: "LinkedIn", Icon: FaLinkedin },
    twitter: { label: "X (Twitter)", Icon: FaXTwitter },
    x: { label: "X (Twitter)", Icon: FaXTwitter },
    facebook: { label: "Facebook", Icon: FaFacebook },
    instagram: { label: "Instagram", Icon: FaInstagram },
    youtube: { label: "YouTube", Icon: FaYoutube },
    github: { label: "GitHub", Icon: FaGithub },
    behance: { label: "Behance", Icon: FaBehance },
    dribbble: { label: "Dribbble", Icon: FaDribbble },
    tiktok: { label: "TikTok", Icon: FaTiktok },
    snapchat: { label: "Snapchat", Icon: FaSnapchat },
    website: { label: "Website", Icon: FaGlobe },
};
