import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Missões" />
        <div className="mission" data-testid="missions">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>

    );
  }
}

export default Missions;
