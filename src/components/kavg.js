import { useState } from "react";
import * as XLSX from "xlsx";


function Kavg() {

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
  }

  return (
    <div className="App">

      <input 
        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleFileUpload} 
        multiple
      />
    </div>
  );
}

export default Kavg;