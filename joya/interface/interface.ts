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
    image: string | string[]
    
    price: number
    
    prices: {
        dates: string
        adultPrice: string 
        childrenPrice: string | null
        surcharge: string | null
    }[] | null,

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
    transports: string[] | null
    highlights: string[] | null
    itinerary: {
        title: string
        activities: activity[]
    }[]

    priceIncludes: (string | ul)[] |  null
    priceExcludes: (string | ul)[] | null
    notes: (string | ul)[] | null
    forChildren: (string | ul)[] | null
    extras: { title: string, bulletPoints: (string | ul)[] } | null
    discountConditions: string[] | null
}

interface activity {
    time: string | null
    description: string | { heading: string, bulletPoints: string[] }
}

interface ul {
    heading: string
    bulletPoints: (string | { heading: string, bulletPoints: string[]})[]
}

