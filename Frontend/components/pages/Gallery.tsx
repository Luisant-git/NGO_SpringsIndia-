import React, { useState, useEffect } from 'react';

const allImages = [
    { id: 1, src: 'https://picsum.photos/seed/gallery1/500/500', alt: 'Community gathering with children', category: 'Community Programs' },
    { id: 2, src: 'https://picsum.photos/seed/gallery2/500/500', alt: 'Children learning in a classroom', category: 'Education' },
    { id: 3, src: 'https://picsum.photos/seed/gallery3/500/500', alt: 'Women in a skill development workshop', category: 'Women Empowerment' },
    { id: 4, src: 'https://picsum.photos/seed/gallery4/500/500', alt: 'Pongal festival celebration', category: 'Community Programs' },
    { id: 5, src: 'https://picsum.photos/seed/gallery5/500/500', alt: 'Students participating in a science expo', category: 'Education' },
    { id: 6, src: 'https://picsum.photos/seed/gallery6/500/500', alt: 'Youth counselling session', category: 'Youth Development' },
    { id: 7, src: 'https://picsum.photos/seed/gallery7/500/500', alt: 'Teacher training program launch', category: 'Women Empowerment' },
    { id: 8, src: 'https://picsum.photos/seed/gallery8/500/500', alt: 'After-school learning activities', category: 'Education' },
    { id: 9, src: 'https://picsum.photos/seed/gallery9/500/500', alt: 'Community Christmas celebration', category: 'Community Programs' },
    { id: 10, src: 'https://picsum.photos/seed/gallery10/500/500', alt: 'Youngsters in a mentoring session', category: 'Youth Development' },
    { id: 11, src: 'https://picsum.photos/seed/gallery11/500/500', alt: 'Women entrepreneurs showcasing products', category: 'Women Empowerment' },
    { id: 12, src: 'https://picsum.photos/seed/gallery12/500/500', alt: 'Children in a joyful learning environment', category: 'Education' },
];

const categories = ['All', 'Community Programs', 'Education', 'Women Empowerment', 'Youth Development'];

const INITIAL_VISIBLE_COUNT = 8;
const LOAD_MORE_COUNT = 4;

const Gallery: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const [filteredImages, setFilteredImages] = useState(allImages);
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    useEffect(() => {
        const newFiltered = filter === 'All' 
            ? allImages 
            : allImages.filter(image => image.category === filter);
        
        setFilteredImages(newFiltered);
        setVisibleCount(INITIAL_VISIBLE_COUNT); // Reset visible count on filter change
    }, [filter]);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + LOAD_MORE_COUNT);
    };

    return (
        <div className="bg-gray-50">
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-indigo-800">Our Gallery</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        A glimpse into the moments that define our journey. See the smiles, the learning, and the impact we create together.
                    </p>
                </div>
            </section>
            
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors ${
                                    filter === category 
                                    ? 'bg-indigo-700 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-indigo-100'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredImages.slice(0, visibleCount).map(image => (
                            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy" 
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>
                                <div className="absolute bottom-0 left-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-sm font-semibold">{image.alt}</p>
                                    <span className="text-xs text-red-300">{image.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {visibleCount < filteredImages.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleLoadMore}
                                className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Gallery;