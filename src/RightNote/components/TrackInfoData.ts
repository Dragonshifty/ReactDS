interface TrackInfo {
    title: string;
    description: string;
    authors: string;
    worksType: string;
    finalChosen: boolean;
}

export const infoData: Record<string, TrackInfo> = {
    callToMe: {
        title: "Call To Me",
        description:
            "Call To Me was the first track that I put together for the derivative work, using pre-purchased music as a bed and Ace Studio to create the vocals. Call To Me is the only track where both the male and female vocalists sing at the same pitch. As it was generally agreed the female vocal performance was stronger than the male, the track was ultimately not included in the final survey study. Despite this, it remains one of my favourite tracks.",
        authors:
            "Music by Ovani Music. Lyrics and vocal arrangement by Dragonshifty Studios.",
        worksType: "Derivative",
        finalChosen: false,
    },
    shine: {
        title: "Shine",
        description: "info",
        authors:
            "Music by Ovani Music. Lyrics and vocal arrangement by Dragonshifty Studios.",
        worksType: "Derivative",
        finalChosen: false,
    },
    fine: {
        title: "Fine",
        description:
            "Probably my favourite song, both in terms of narrative and that I thought it was time for the two vocalists to duet with each other. As with all the tracks, I'd rather not say exactly what the the narrative is, suffice to say some trivial things can mean a lot.",
        authors: "",
        worksType: "Derivative",
        finalChosen: true,
    },
    myOwnExpectations: {
        title: "My Own Expectations",
        description:
            "My Own Expectations was a lot of fun to record. It was written from the drums up, with emphasis on the bass. ",
        authors: "Music by Dragonshifty Studios.",
        worksType: "Composition",
        finalChosen: true,
    },
    myOne: {
        title: "My One",
        description:
            "The sad one. I love both vocalists' performances on this one. The timing structure for the vocals is also more free-form. I'll leave it up to the listener to create their own narrative on it.",
        authors: "",
        worksType: "Derivative",
        finalChosen: true,
    },
    flyOn: {
        title: "Fly On",
        description:
            "Fly On was written with the basis of starting with the chorus. It was also the track that garnered the most positive feedback after the main survey, with requests for access to the 'full song'.",
        authors: "",
        worksType: "Derivative",
        finalChosen: true,
    },
    clearly: {
        title: "Clearly",
        description:
            "A fushion of rock and drum and bass, with an agressive vocal narrative.",
        authors:
            "Music by Andy Ray. Lyrics and vocal arrangement by Dragonshifty Studios.",
        worksType: "Derivative",
        finalChosen: true,
    },
    dreamWistfully: {
        title: "Dream Wistfully",
        description: "info",
        authors: "Music by Dragonshifty Studios.",
        worksType: "Composition",
        finalChosen: true,
    },
    rising: {
        title: "Rising",
        description: "info",
        authors: "Music by Dragonshifty Studios.",
        worksType: "Composition",
        finalChosen: true,
    },
    triggered: {
        title: "Triggered",
        description: "info",
        authors: "Music by Dragonshifty Studios.",
        worksType: "Composition",
        finalChosen: true,
    },
    dreamWistfullyDiscovery: {
        title: "Dream Wistfully Discovery",
        description: "info",
        authors: "Music by Dragonshifty Studios. Voice by NASA.",
        worksType: "Composition",
        finalChosen: false,
    },
};
