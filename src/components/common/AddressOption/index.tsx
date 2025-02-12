import { useState } from 'react';

interface District {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
  districts: District[];
}

const CITIES: City[] = [
  {
    id: 1,
    name: '서울특별시',
    districts: [
      { id: 1, name: '강남구' },
      { id: 2, name: '강동구' },
      { id: 3, name: '강서구' },
      { id: 4, name: '강북구' },
      { id: 5, name: '관악구' },
      { id: 6, name: '광진구' },
      { id: 7, name: '구로구' },
      { id: 8, name: '금천구' },
      { id: 9, name: '노원구' },
      { id: 10, name: '도봉구' },
      { id: 11, name: '동대문구' },
      { id: 12, name: '동작구' },
    ],
  },
  {
    id: 2,
    name: '경기도',
    districts: [
      { id: 1, name: '수원시' },
      { id: 2, name: '성남시' },
      { id: 3, name: '용인시' },
      { id: 4, name: '부천시' },
      { id: 5, name: '안산시' },
      // ... 나머지 시들
    ],
  },
  // ... 다른 시/도
];

interface AddressOptionProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (city: string, district: string) => void;
}

export default function AddressOption({
  isOpen,
  onClose,
  onSelect,
}: AddressOptionProps) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] max-h-[80vh]">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">주소 선택</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="flex h-[400px]">
          {/* 시/도 목록 */}
          <div className="w-1/2 border-r border-gray-200 overflow-y-auto">
            {CITIES.map((city) => (
              <div
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-3 cursor-pointer transition-colors
                  ${
                    selectedCity?.id === city.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
              >
                {city.name}
              </div>
            ))}
          </div>

          {/* 구/시 목록 */}
          <div className="w-1/2 overflow-y-auto">
            {selectedCity?.districts.map((district) => (
              <div
                key={district.id}
                onClick={() => {
                  onSelect(selectedCity.name, district.name);
                  onClose();
                }}
                className="px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                {district.name}
              </div>
            ))}
            {!selectedCity && (
              <div className="p-4 text-gray-500 text-center">
                시/도를 선택해주세요
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
