export default function Services() {
    const services = [
  {
    name: 'Social Media Marketing',
    icon: './assets/web-icon.png',
    description: 'End-to-end social media management including strategy, ad campaigns, content creation, and audience growth across platforms.',
    link: '',
  },
  {
    name: 'Content Creation',
    icon: './assets/graphics-icon.png',
    description: 'Creative design and copywriting for static posts, reels, ad creatives, blogs, and brand storytelling that engage audiences.',
    link: '',
  },
  {
    name: 'Performance Marketing',
    icon: './assets/ui-icon.png',
    description: 'Running and optimizing Meta & Google Ads campaigns to maximize reach, conversions, and measurable business growth.',
    link: '',
  },
  {
    name: 'Brand Strategy',
    icon: './assets/mobile-icon.png',
    description: 'Helping brands grow with creative strategies covering positioning, campaign planning, and consistent digital presence.',
    link: '',
  },
];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        
            <h2 className="text-center text-5xl">My services</h2>
           
            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg font-medium my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}