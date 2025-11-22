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
        setImpactYears(data);
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
      <div className="bg-gradient-to-r from-teal-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs and Impacts</h1>
          <p className="text-xl opacity-90">Transforming Lives Through Education and Empowerment</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12">
          {impactYears.map((year) => (
            <div key={year.id} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-teal-700 mb-4">{year.year}</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{year.description}</p>
              
              <div className="grid gap-6">
                {year.impactMonths.map((month) => (
                  <div key={month.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="lg:flex">
                      <div className="lg:w-1/2">
                        <div className={`gap-2 p-4 ${
                          month.images.length === 1 ? 'grid grid-cols-1' :
                          month.images.length === 2 ? 'grid grid-cols-2' :
                          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        }`}>
                          {month.images.slice(0, 3).map((image, index) => (
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
                      
                      <div className="lg:w-1/2 p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{month.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{month.description}</p>
                        
                        <div className="bg-orange-50 rounded-lg p-4">
                          <h4 className="text-lg font-semibold text-orange-600 mb-2">{month.impactTitle}</h4>
                          <div className="text-gray-700 whitespace-pre-line">{month.impactDescription}</div>
                        </div>
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