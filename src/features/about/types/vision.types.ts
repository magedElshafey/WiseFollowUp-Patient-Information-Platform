export interface Card {
    title: string,
    description: string
}
export interface Vision {
    is_active: boolean;
    cards: Card[]
}