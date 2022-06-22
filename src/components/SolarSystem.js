import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const { name, image } = planets;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName={ name } planetImage={ image } />
      </div>
    );
  }
}

export default SolarSystem;
