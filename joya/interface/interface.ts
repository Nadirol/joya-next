export interface tour {
    destinations: string | null,
    image: string,
    title: string,
    duration: number | null,
    price: number | null,
    id: string,
    tourType: string,
    description: string | null
}

export interface partnerTour {
    id: string
    image: string
    
    price: number
    duration: {
        days: number,
        nights: number
    }
    tourType: string
    vi: tourContent
    en: tourContent
}

export interface tourContent {
    title: string

    description: string[] | null
    destinations: string[]
    highlights: string[] | null
    itinerary: {
        title: string
        activities: activity[]
    }[]
    priceIncludes: string[] | null
    priceExcludes: string[] | null
    notes: string[] | null
    forChildren: string[] | null
    extras: { title: string, bulletPoints: string[] } | null
}

interface activity {
    time: string | null
    description: string | { heading: string, bulletPoints: string[] }
}