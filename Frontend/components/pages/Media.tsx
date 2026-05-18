import React, { useState } from 'react';
import media1Jpeg from '../../assets/media-1.jpeg';
import media2Jpeg from '../../assets/media-2.jpeg';
import media3Jpeg from '../../assets/media-3.jpeg';

const Media: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mediaItems = [
    { id: 1, image: media1Jpeg, title: 'Media Coverage 1' },
    { id: 2, image: media2Jpeg, title: 'Media Coverage 2' },
    { id: 3, image: media3Jpeg, title: 'Media Coverage 3' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="cta-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Media Coverage</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Our work in the spotlight - Media recognition and coverage
          </p>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Media Recognition
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Springs India Foundation's initiatives and impact have been recognized by various media outlets, highlighting our commitment to community development and social transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <i className="fas fa-newspaper" style={{color: '#ff6f00'}}></i>
                    </div>
                  </div>
                  {/* <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedImage} 
              alt="Media coverage"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
