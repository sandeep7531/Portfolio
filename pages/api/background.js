const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Chandigarh University',
                degree: 'Master of Computer Application',
                detail: "Master's Degree in Computer Application from CU Punjab.",
                year: '2022-Present'
            },
            {
                id: 1,
                title: 'Maharshi Dayanand University',
                degree: 'Bachelor of Computer Application',
                detail: "Bachelor's Degree in Computer Application from MDU Rohtak.",
                year: '2016-2019'
            },
            {
                id: 3,
                title: 'CBSE BOARD',
                degree: 'Senior Secondary Education',
                detail: "Completed Senior Secondary from CBSE BOARD New Delhi",
                year: '2015-2016'
            },
        ]
    },
    {
        expCards: [
            {
                id: 3,
                title: 'Aurum Wisex Technologies',
                role: 'Senior Frontend Developer',
                url: 'https://aurumwisex.com/',
                desc: "As a senior developer champion code quality, adherence to coding standards, and best practices.This includes conducting code reviews, implementing automated testing strategies, and promoting efficient and maintainable code structures.",
                year: '09/2023 - Present',
                location: 'New Delhi, India'
            },
            {
                id: 1,
                title: 'Method and Madness techlonogy',
                role: 'Frontend Developer',
                url: 'https://blox.xyz/',
                desc: "As a senior member of the team, provide technical leadership and guidance to junior developers, assisting them with problem - solving, code reviews, and best practices.",
                year: '10/2022 - 09/2023',
                location: 'New Delhi, India'
            },
            {
                id: 2,
                title: 'Octify Technologies',
                role: 'Frontend Developer',
                url: 'https://octifytechnologies.com/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2020 - 09/2022',
                location: 'Gurugram, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
