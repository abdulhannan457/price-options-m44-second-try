// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from "axios";
import { useEffect, useState } from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import { Audio, Grid } from  'react-loader-spinner'

// const Phones = () => {
    // const [phones, setPhones] = useState([])

    // useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=> res.json())
        // .then(data=> setPhones(data.data))
    //     axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(data=>{
    //         const phoneData = data.data.data;
    //        const phonesWithFakeData = phoneData.map(phone=>{
    //         const obj = {
    //             name : phone.phone_name,
    //             price: parseInt(phone.slug.split('-')[1])

    //         }
    //         return obj;
    //        })
    //        console.log(phonesWithFakeData)
    //        setPhones(phonesWithFakeData)
    //     })
    // },[])
    // return (
        // <div>
            // <h2 className="text-5xl"> Phones:{phones.length}</h2>
           
            {/* <BarChart width={1200} height={400} data={phones}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'price'}></YAxis>
                <Tooltip></Tooltip>
          <Bar dataKey="price" fill="#8884d8" />
        // </BarChart> */}


        // </div>
    // );
// };

// export default Phones;



const Phones = () => {

    const [phones, setPhones] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
        const phoneData = data.data.data
       const fakePhonesData = phoneData.map(phone=>{
        const obj = {
            name : phone.phone_name,
            price : parseInt(phone.slug.split('-')[1])
        }
        return obj;
       })
       console.log(fakePhonesData)
       setPhones(fakePhonesData)
       setLoading(false)
    })
    },[])



    return (
        <div>


{
    loading && <div>
        
    <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
<Grid
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

    </div>
}



            <h2 className="text-3xl"> phones:{phones.length}</h2>
            <BarChart width={1400} height={600} data={phones}
    
    >
     <Tooltip></Tooltip>
      <XAxis dataKey="name" />
      <YAxis dataKey={'price'}/>
      <Bar dataKey="price" fill="#8884d8">
       
          {/* -------------------------------------- */}
       
      </Bar>
    </BarChart>
            {/* <BarChart width={1200} height={600} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis dataKey={'price'}></YAxis>
          <Tooltip></Tooltip>
        </BarChart> */}
       



        </div>
    );
};

export default Phones;