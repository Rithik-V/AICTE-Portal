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
import Header2 from '../components/Header2';
import { useState } from "react";
import * as XLSX from "xlsx";
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

  const getOptions3 = (type) => ({
    chart: {
      type,
      width: 800,
      height: 500,
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: ['P01', 'P02', 'P03', 'P04', 'P05', 'P06'],
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

  const getOptions4 = (type) => ({
    chart: {
      type,
      width: 800,
      height: 500,
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: ['K1', 'K2', 'K3', 'K4', 'K5', 'K6'],
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
    
    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
        const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      console.log(parsedData);
      let k1 =0,k2=0,k3=0,k4=0;
      for(var i=0;i<parsedData.length;i+=1)
      {
        k1+=parsedData[i]["K1"];
        k2+=parsedData[i]["K2"];
        k3+= parsedData[i]["K3"];
        k4+= parsedData[i]["K4"];
      }
      // console.log(k1/parsedData.length);
      // console.log(k2/parsedData.length);
      // console.log(k3/parsedData.length)
      // console.log(k4/parsedData.length);
      var i=0
      while(localStorage.getItem(i)!=null)
      {
        console.log(localStorage.getItem(i));
        i++
      }
      // console.log(localStorage.getItem(i)!=null)
      //console.log(localStorage);
      localStorage.setItem(i,[k1/parsedData.length,k2/parsedData.length,k3/parsedData.length,k4/parsedData.length])
      console.log(localStorage.getItem(i));
    };
  };


    return (
      <div className="Dashboard">
        <Header2/>
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
        <span className="Dashboard-card-content">Course Outcomes (COs)</span><br></br>
        <br></br>
        <HighchartsReact highcharts={Highcharts} options={getOptions1('cylinder')} />

      </div>
      <div className="Dashboard-card3">
        <span className="Dashboard-card-title">Activity</span><br></br>
        <span className="Dashboard-card-content">Program Outcomes (POs)</span><br></br>
        <br></br>
        <HighchartsReact highcharts={Highcharts} options={getOptions3('cylinder')} />

      </div>
      <div className="Dashboard-card3">
        <span className="Dashboard-card-title">Activity</span><br></br>
        <span className="Dashboard-card-content">K - Levels</span><br></br>
        <br></br>
        <HighchartsReact highcharts={Highcharts} options={getOptions4('cylinder')} />

      </div>
      </div>
      <input 
        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleFileUpload} 
        multiple
      />
      </div>
    );
  }
  
  export default Dashboard;