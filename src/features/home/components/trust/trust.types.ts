
export interface TrustTypes {
  heading: string,
  description: string[]
  cards: {
    title: string, description: string, image: string
  }[];
  note?: string
  is_active: boolean
}