export default function Work() {
    // Define the gradient for consistent accenting
    const ACCENT_GRADIENT_CLASS = 'bg-gradient-to-r from-[#b820e6] to-[#da7d20]';
    const ACCENT_TEXT_GRADIENT_CLASS = `${ACCENT_GRADIENT_CLASS} bg-clip-text text-transparent`;

    const work = [
        {
            name: 'Campaigns for offers, store launches, unlimited pizza promos.',
            client: 'Pizza Shop', // Added a client/category field for better context
            icon: './assets/work-1.png',
            link: '',
        },
        {
            name: 'Creative posts & videos to increase online orders.',
            client: 'Pancakes Shop',
            icon: './assets/work-2.png',
            link: '',
        },
        {
            name: 'Engaging social media reels & static posts.',
            client: 'Momos Shop',
            icon: './assets/work-3.png',
            link: '',
        },
        {
            name: 'Branding & social campaigns for fruit popsicles.',
            client: 'Icecream Shop',
            icon: './assets/work-4.png',
            link: '',
        },
        {
            name: 'Travel ads, video editing, and content marketing.',
            client: 'Travel Brand',
            icon: './assets/work-5.png',
            link: '',
        },
        {
            name: 'Local branch page management.',
            client: 'Retail/Salon',
            icon: './assets/work-6.png',
            link: '',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">

            <h2 className="text-center text-5xl ">My latest work</h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70">
                From freelance to agency roles, I’ve driven campaigns for food, lifestyle, travel, and retail brands.
            </p>

            <div className="grid lg:grid-cols-3 my-10 gap-8">
                {work.map((project) => (
                    <div
                        key={project.name}
                        className="group relative block aspect-square rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.03] transform-gpu dark:border"
                    >
                        {/* Image/Icon container */}
                        <div
                            className="w-full h-full bg-no-repeat bg-cover bg-center transition-all duration-500"
                            style={{ backgroundImage: `url(${project.icon})` }}
                        >
                            {/* Gradient Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>

                        {/* Enhanced Text Box Container */}
                        <div className="absolute inset-0 flex items-end p-6">
                            <div className="w-full bg-white backdrop-blur-md rounded-lg p-5 shadow-2xl transition-all duration-500 translate-y-2 group-hover:translate-y-0 border border-gray-100 dark:border-white/10">
                                
                                {/* Client/Category */}
                                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${ACCENT_TEXT_GRADIENT_CLASS}`}>
                                    {project.client}
                                </p>

                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-lg  text-gray-900  leading-snug">
                                        {project.name}
                                    </h3>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}