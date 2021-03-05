import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TStatistics, TStatisticsHeader } from '../../AppConstants';
import { TState } from '../../redux/types';

type Props = {
  statistics: TStatistics;
};

const Statistics: React.FC<Props> = ({ statistics }: Props) => {
  const headers: TStatisticsHeader[] = ['date', 'mode', 'side', 'winner'];

  return (
    <div className="statistics">
      <NavLink className="btn btn--back" to="/">
        Back
      </NavLink>
      <table className="statistics__table">
        <thead>
          <tr>
            <th className="statistics__header">№</th>
            {headers.map((header, idx) => (
              <th key={idx} className="statistics__header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {statistics.map((row, idx) => {
            return (
              <tr key={idx}>
                <td className="statistics__number">{idx + 1}</td>
                {headers.map((header, i) => (
                  <td key={i} className="statistics__cell">
                    {row[header].toString()}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: TState) => {
  return {
    statistics: state.statistics,
  };
};

export default connect(mapStateToProps)(Statistics);
