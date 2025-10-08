export default function Experience() {
    // Define your original gradient and a general class for it
    const GRADIENT_CLASS = 'bg-gradient-to-r from-[#b820e6] to-[#da7d20]';
    const TEXT_GRADIENT_CLASS = `${GRADIENT_CLASS} bg-clip-text text-transparent`;

    const experiences = [
        {
            role: 'Senior Digital Marketer',
            company: 'Madras Creatives',
            period: '2025 – Present',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Handling multiple direct clients in F&B and lifestyle sector.',
            clients: [
                'Canadian 2 for 1 Pizza',
                'Tibet Momos',
                'Licksters (Fruit Popsicles)',
                `Uncle Peter's Pancakes`
            ],
            responsibilities: 'End-to-end strategy, ad campaigns, content creation, performance marketing, social media growth.',
            current: true
        },
        {
            role: 'Social Media Manager',
            company: 'Tick Your Tour',
            period: '2023 – 2025',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Managed complete social media marketing for travel brand.',
            highlights: [
                'Created ad creatives, static posts, reels, and promotional campaigns',
                'Skilled in Canva, Photoshop (basic), and video editing',
                'Responsible for content writing, voiceovers, and performance tracking'
            ]
        },
        {
            role: 'Freelance Digital Marketer',
            company: 'Naturals Salon, Puzhuthivakkam',
            period: '2022',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Managed their social media presence.',
            highlights: [
                'Updated content from main Naturals account to branch account',
                'Created engaging posts and reels tailored for local audience'
            ]
        },
        {
            role: 'Education Information Center / BPO',
            company: '14417',
            period: '2019 – 2022',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Worked in the BPO sector, gaining communication and client handling experience.'
        }
    ];

    return (
        <div id="experience" className="w-full px-[6%] py-10 scroll-mt-20">

            <h2 className="text-center text-5xl">My Experience</h2>

 <div className="max-w-7xl mx-auto my-20">
                {experiences.map((exp, index) => (
                    <div 
                        key={index} 
                        className="relative border border-gray-300 dark:border-white/30 rounded-xl p-8 mb-8 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/60 dark:hover:bg-darkHover/50"
                    > 
                    {/* <div className="flex-shrink-0">
                                <img src={exp.icon1} alt="" className="w-10 mt-1 dark:hidden" />
                                <img src={exp.icon2} alt="" className="w-10 mt-1 hidden dark:block" />
                     </div> */}
                        <div className="flex items-start gap-6">
                           
                            
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm bg-pink-500 w-fit text-white px-3 py-1.5 rounded-2xl mt-1 sm:mt-0">
                                        {exp.period}
                                    </span>
                                </div>
                                
                                <p className="text-base font-medium bg-gradient-to-r from-[#b820e6] to-[#da7d20] bg-clip-text text-transparent mb-3">
                                    {exp.company}
                                </p>
                                
                                <p className="text-gray-600 dark:text-white/80 mb-4">
                                    {exp.description}
                                </p>

                                {exp.clients && (
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 dark:text-white/90 mb-2">
                                            Currently managing marketing for:
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {exp.clients.map((client, idx) => (
                                                <li 
                                                    key={idx} 
                                                    className="text-sm text-gray-600 dark:text-white/70 flex items-center"
                                                >
                                                    <span className="mr-2">🔹</span>
                                                    {client}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {exp.responsibilities && (
                                    <div className="border border-gray-200 dark:bg-white/5 rounded-lg p-4 mb-4 w-fit">
                                        <p className="text-sm font-medium text-gray-700 dark:text-white/90 mb-2">
                                            Key Roles:
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-white/80">
                                            {exp.responsibilities}
                                        </p>
                                    </div>
                                )}

                                {exp.highlights && (
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, idx) => (
                                            <li 
                                                key={idx} 
                                                className="text-sm text-gray-600 dark:text-white/80 flex items-start"
                                            >
                                                <span className="mr-2 mt-1 flex-shrink-0">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}