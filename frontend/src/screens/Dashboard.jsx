import React from "react";
import "./Dashboard.css";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsCylinder from 'highcharts/modules/cylinder';
import HighchartsStreamgraph from 'highcharts/modules/streamgraph';
Highcharts3D(Highcharts);
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsCylinder(Highcharts);
HighchartsStreamgraph(Highcharts);

const getOptions1 = (type) => ({
    chart: {
      type,
      width: 800,
      height: 500,
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: ['C01', 'C02', 'C03', 'C04', 'C05', 'C06'],
    },
    yAxis: {
        title: {
            text: undefined,
          },
        labels: {
          format: '{value}%'
        }
      },
    series: [
      {
        color:"orange",
        name: 'Annual',
        data: [38, 50, 15, 25, 10, 58],
      }
    ],
    credits: {
      enabled: false,
    },
  });

  const getOptions2 = (type) => ({
    chart: {
      type,
      width: 300,
      height: 200,
    },
    title: {
      text: undefined,
    },
    xAxis: {
        labels: {
            enabled: false
        },
      categories: ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C010'],
    },
    yAxis: {
        labels: {
            enabled: false
        },
        title: {
            text: undefined,
          }
      },
    series: [
      {
        color:"green",
        marker: {
            enabled: false,
          },
        name: 'Annual',
        data: [0, 2, 4, 1, 2, 12, 2, 5, 0, 1, 4, 5],
      }
    ],
    credits: {
      enabled: false,
    },
  });

function Dashboard() {
    return (
      <div className="Dashboard">
      <div className="Dashboard-header">
        <form>
          <input type="text" placeholder="Search..."></input>
        </form>
      </div>
      <div className="Dashboard-body">
        <span className="Dashboard-body-title">Analytical Overview</span><br></br>
        <span className="Dashboard-body-content">January 1 - 30, 2023</span><br></br>
      <div className="Dashboard-card1">
        <span className="Dashboard-card-title">Statistics</span><br></br>
        <span className="Dashboard-card-content">Number of Students Enrolled</span><br></br>
        <span className="Dashboard-card-number">635</span><br></br>
        <span className="Dashboard-card-rate">+21.01%</span><br></br>
        <HighchartsReact highcharts={Highcharts} options={getOptions2('area')} />
      </div>
      <div className="Dashboard-card2">
        <span className="Dashboard-card-title">Statistics</span><br></br>
        <span className="Dashboard-card-content">Average Faculty Visit Duration</span><br></br>
        <span className="Dashboard-card-number">5m 8s</span><br></br>
        <span className="Dashboard-card-rate">-7.69%</span><br></br>
      </div>
      <div className="Dashboard-card3">
        <span className="Dashboard-card-title">Activity</span><br></br>
        <span className="Dashboard-card-content">Course Outcomes</span><br></br>
        <br></br>
        <HighchartsReact highcharts={Highcharts} options={getOptions1('cylinder')} />

      </div>
      </div>
      </div>
    );
  }
  
  export default Dashboard;