import React, { useEffect, useState } from 'react';
import SuperCards from './SuperCards';

const apiKey = import.meta.env.VITE_TOKEN;
const maxCharacterId = 731; 
const characterIds = Array.from({ length: maxCharacterId }, (_, i) => i + 1);

const SuperList = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetchSuperheroData();
  }, []);

const fetchSuperheroData = async () => {
  try {
    const superheroData = await Promise.all(
      characterIds.map(async (id) => {
        const response = await fetch(`https://www.superheroapi.com/api.php/${apiKey}/${id}/image`);
        const data = await response.json();
        return {
          name: data.name,
          image: data.url, 
        };
      })
    );
    setSuperheroes(superheroData);
  } catch (error) {
    console.error('Error fetching superhero data', error);
  }
};



  return (
    <div className="superhero-list">
      {superheroes.map((superhero, index) => (
        <SuperCards key={index} name={superhero.name} image={superhero.image} />
      ))}
    </div>
  );
};

export default SuperList;
