import React, { useState, useEffect } from 'react';
import { getImpactYears } from '../api/impactYearApi.js';
import { API_BASE_URL } from '../../config.js';

interface ImpactMonth {
  id: number;
  title: string;
  monthNumber: number;
  images: string[];
  description: string;
  impactTitle: string;
  impactDescription: string;
}

interface ImpactYear {
  id: number;
  year: string;
  fromMonth: number;
  fromYear: number;
  toMonth: number;
  toYear: number;
  description: string;
  impactMonths: ImpactMonth[];
}

const ProgramsImpacts: React.FC = () => {
  const [impactYears, setImpactYears] = useState<ImpactYear[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getImpactYears();
        const sortedData = data.map(year => {
          const sorted = [...year.impactMonths].sort((a, b) => {
            const aYear = a.monthNumber >= year.fromMonth ? year.fromYear : year.toYear;
            const bYear = b.monthNumber >= year.fromMonth ? year.fromYear : year.toYear;
            if (aYear !== bYear) return bYear - aYear;
            return b.monthNumber - a.monthNumber;
          });
          return { ...year, impactMonths: sorted };
        });
        setImpactYears(sortedData);
      } catch (error) {
        console.error('Error fetching impact years:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="cta-gradient text-white py-8 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Programs and Impacts</h1>
          <p className="text-sm md:text-lg lg:text-xl opacity-90">Creating a Future-Ready Society through Women Empowerment and Child Education, and building an inclusive, empowered, and sustainable Society.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid gap-6 md:gap-12">
          {impactYears.map((year) => (
            <div key={year.id} className="bg-white rounded-lg shadow-lg p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-3 md:mb-4">{year.year}</h2>
              <div 
                className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-8 [&_h1]:text-xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:my-2 [&_h1]:md:my-4 [&_h2]:text-lg [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:my-2 [&_h2]:md:my-3 [&_h3]:text-base [&_h3]:md:text-xl [&_h3]:font-bold [&_h3]:my-1 [&_h3]:md:my-2 [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:md:ml-6 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:ml-4 [&_ol]:md:ml-6 [&_ol]:my-2 [&_li]:my-1 [&_p]:my-2"
                dangerouslySetInnerHTML={{ __html: year.description }}
              />
              
              <div className="grid gap-4 md:gap-6">
                {year.impactMonths.map((month) => (
                  <div key={month.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="lg:flex">
                      <div className="lg:w-1/2">
                        <div className={`gap-1 md:gap-2 p-2 md:p-4 ${
                          month.images.length === 1 ? 'grid grid-cols-1' :
                          month.images.length === 2 ? 'grid grid-cols-2' :
                          month.images.length <= 4 ? 'grid grid-cols-2' :
                          'grid grid-cols-2 md:grid-cols-3'
                        }`}>
                          {month.images.slice(0, 9).map((image, index) => (
                            <div key={index} className="aspect-square overflow-hidden rounded-lg">
                              <img
                                src={`${API_BASE_URL}/uploads/${image}`}
                                alt={`${month.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:w-1/2 p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">{month.title}</h3>
                        <div 
                          className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed [&_h1]:text-xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:my-2 [&_h1]:md:my-4 [&_h2]:text-lg [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:my-2 [&_h2]:md:my-3 [&_h3]:text-base [&_h3]:md:text-xl [&_h3]:font-bold [&_h3]:my-1 [&_h3]:md:my-2 [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:md:ml-6 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:ml-4 [&_ol]:md:ml-6 [&_ol]:my-2 [&_li]:my-1 [&_p]:my-2"
                          dangerouslySetInnerHTML={{ __html: month.description }}
                        />
                        
                        {(month.impactTitle || month.impactDescription) && (
                          <div className="bg-orange-50 rounded-lg p-3 md:p-4">
                            {month.impactTitle && <h4 className="text-base md:text-lg font-semibold text-orange-600 mb-2">{month.impactTitle}</h4>}
                            {month.impactDescription && (
                              <div 
                                className="text-sm md:text-base text-gray-700 [&_h1]:text-xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:my-2 [&_h1]:md:my-4 [&_h2]:text-lg [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:my-2 [&_h2]:md:my-3 [&_h3]:text-base [&_h3]:md:text-xl [&_h3]:font-bold [&_h3]:my-1 [&_h3]:md:my-2 [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:md:ml-6 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:ml-4 [&_ol]:md:ml-6 [&_ol]:my-2 [&_li]:my-1 [&_p]:my-2"
                                dangerouslySetInnerHTML={{ __html: month.impactDescription }}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsImpacts;