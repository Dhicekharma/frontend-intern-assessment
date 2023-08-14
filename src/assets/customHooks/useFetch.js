import { useEffect } from "react";
import { productsAtom } from "../productAtom";
import { useAtom } from "jotai";


function useFetch(url){
    const [data,setData]=useAtom(productsAtom)
    const [ispending, setIspending] = useAtom(true);
    const [error, setError] = useAtom(null);
useEffect(() => {
 fetch(urls)
   .then(res => res.json())
   .then(data => {
     setData(data.products);
         console.log(data);
         setIspending(false);
          setError(null)
   })
   .catch(error => {
     console.error('Error fetching data:', error);
     alert(error);
     setIspending(false);
     setError(error.message);
   });
}, []);
 return{ data,ispending,error}
}
export default useFetch;