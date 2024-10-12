import {useState,useEffect,useCallback} from 'react'
import axios from 'axios';


const useFetch = (url) => {
 
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [errorr,setErrorr]=useState('')
  // const [urlLocal ,setUrlLocal]=useState(url)
  // change url from host_api to local_api
  // const changeURL=(e,message)=>{
  //   if(message === "Network Error"){
  //       if(e===process.env.REACT_APP_KEY_API_ICONS_S){
  //         setUrlLocal(process.env.REACT_APP_KEY_API_ICONS_SS)
  //       }
  //       if(e===process.env.REACT_APP_KEY_API_PROJECT_S){
  //         setUrlLocal(process.env.REACT_APP_KEY_API_PROJECT_SS)
  //       }
  //   }
  // }
  const getdata = useCallback(async () => {

    await axios.get(url)
    .then(e=>{
      setData(e.data) 
      setErrorr(null)
    })
    .catch((e)=>{
      setErrorr(e.message)
      // changeURL(url,e.message)
    })
    .finally(()=>setLoading(false))

  }, [url ]);

  useEffect(() => {
    getdata();
  }, [url,errorr ,getdata]);

  return { loading, data, errorr};
}
 
export default useFetch;