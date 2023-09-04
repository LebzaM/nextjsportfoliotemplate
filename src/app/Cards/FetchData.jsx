import React, {useState, useEffect} from 'react'
import axios from 'axios'
const FetchData = () => {
    const [jobs, setJobs] = useState([])
    // const options = {
    //     method: 'GET',
    //     url: 'https://jsearch.p.rapidapi.com/search',
    //     params: {
    //       query: 'Web developer',
    //       page: '1',
    //       num_pages: '1'
    //     },
    //     headers: {
    //       'X-RapidAPI-Key': 'cd777a42dcmsh51c1702c92c358ep1f9ef9jsn5c8ac7e51483',
    //       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     }
    //   };
      

    //   useEffect(() => {
    //     const getJobs = async()=>{
    //         try {
    //             const response = await axios.request(options)
    //             console(response.data)
    //         } catch (error) {
    //             console.log(error)
                
    //         }
    //     }
      
    //     getJobs();
    //   }, [])
      
  return (
    <div>FetchData</div>
  )
}

export default FetchData