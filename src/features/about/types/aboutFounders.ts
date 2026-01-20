export interface AboutFounders {
    first: Founder
    second: Founder
    is_active: boolean
}
export interface Founder {
    name: string
    position: string
    bio: string[],
    socials: FounderSocial[],
    image: string
}
export interface FounderSocial {
    type: string;
    link: string;
}
