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

    description: string[]
    destinations: string[]
    highlights: string[]
    itinerary: {
        title: string
        activities: activity[]
    }[]
    priceIncludes: string[]
    priceExcludes: string[]
    notes: string[]
    forChildren: string[]
}

interface activity {
    time: string | null
    description: string
}