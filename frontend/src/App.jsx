import React, { useEffect, useState } from 'react'
import {Slider} from "antd";
import axios from "axios";
import Bar from './UI';

const App = () => {
  const [score, setScore] = useState(3);

  const [data, setData] = useState();

  const [loading, setLoading] = useState(false);

  const getData = async() =>{
    setLoading(true);
    try {
      const {data} = await axios.get(`http://localhost:3000/api/get-stocks/${score}`);
      console.log(data.data);

      setData(data.data)

    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    getData();
  },[score])

  // console.log(score);

  return (
    <div className='flex justify-center items-center h-screen'>
   
    <div className='bg-[#efebe9] border-2 border-[#4e342e] fixed z-10 top-44 w-1/2 md:w-1/4 rounded-xl p-5'>
      <span className='pl-1 font-bold'>Risk Score: {score}</span>
    <Slider defaultValue={score} step={1} max={10} onChange={value => setScore(value)}/>
    </div>

    <div className='w-1/2 md:w-1/4 fixed top-72'>

    <div>
      {/* {JSON.stringify(data)} */}
      <Bar name={"Nigerian Stocks"} score={data?.nigerianStocks} color1={"#0d47a1"} color2={"#e3f2fd"}/>
     
      <Bar name={"Foreign Stocks"} score={data?.foreignStocks} color1={"#2e7d32"} color2={"#e8f5e9"}/>
     
      <Bar name={"Tech Stocks"} score={data?.techStocks} color1={"#ef6c00"} color2={"#fff3e0"}/>
     
      <Bar name={"Emerging Stocks"} score={data?.emergingStocks} color1={"#00695c"} color2={"#e0f7fa"}/>
     
      <Bar name={"Nigerian Bonds"} score={data?.nigerianBonds} color1={"#6a1b9a"} color2={"#f3e5f5"}/>
     
     {data?.foreignBonds > 0 && <Bar name={"Foreign Bonds"} score={data?.foreignBonds} color1={"#b71c1c"} color2={"#ffebee"}/>}
     
     {data?.commodities > 0 && <Bar name={"Commodities"} score={data?.commodities} color1={"#fbc02d"} color2={"#fffde7"}/> }

     {data?.realEstate > 0 && <Bar name={"Real Estate"} score={data?.realEstate} color1={"#424242"} color2={"#f5f5f5"}/>}
     
     {data?.tBills > 0 && <Bar name={"T-Bills"} score={data?.tBills} color1={"#1a237e"} color2={"#e8eaf6"}/>}
     
     {data?.alternative > 0 &&  <Bar name={"Alternative"} score={data?.alternative} color1={"#9e9d24"} color2={"#f9fbe7"}/>}
     
      </div>


</div>


<div className='grid grid-cols-3 fixed bottom-20 gap-5 justify-items-center'>

{data?.foreignBonds === 0 && <div className='flex justify-between border-2 border-[#b71c1c] p-1 rounded-md items-center w-40'>
  <span>Foreign Bonds</span>
  <span>{data?.foreignBonds}</span>
</div>}

{data?.commodities === 0 && <div className='flex justify-between border-2 border-[#fbc02d] p-1 rounded-md items-center w-40'>
  <span>Commodities</span>
  <span>{data?.commodities}</span>
</div>}

{data?.realEstate === 0 && <div className='flex justify-between border-2 border-[#424242] p-1 rounded-md items-center w-40'>
  <span>Real Estate</span>
  <span>{data?.realEstate}</span>
</div>}

{data?.tBills === 0 && <div className='flex justify-between border-2 border-[#1a237e] p-1 rounded-md items-center w-40'>
  <span>T-Bills</span>
  <span>{data?.tBills}</span>
</div>}

{data?.alternative === 0 && <div className='flex justify-between border-2 border-[#9e9d24] p-1 rounded-md items-center w-40'>
  <span>Alternative</span>
  <span>{data?.alternative}</span>
</div>}

</div>

    </div>
  )
}

export default App