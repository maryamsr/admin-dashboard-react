import React, { Component } from 'react';
import Feaures from './../../components/features/Feaures.jsx';
import Chart from './../../components/chart/Chart.jsx';
import { xAxisData } from '../../datas.js';

export default class Home extends Component {
  render() {
    return (
      <div className="home grow">
        <Feaures />
        <Chart grid Title="Month Sale" Data={xAxisData} dataKey="Sale" />
      </div>
    );
  }
}
