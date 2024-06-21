import { useContext } from "react";
import { NetworkContext } from "../context/NetworkContext";
import axios from 'axios'
export function FetchData(){
    let {setReqdetails}=useContext(NetworkContext)
   async function getDataUsingFetch(){
        try {
            let resp=await fetch("https://reqres.in/api/users?page=2")
            console.log(resp)
            setReqdetails(resp)          
        } catch (error) {
            console.log(error);
        }
    }
    async function getDataUsingAxios(){
        try {
            let resp=await axios.get("https://reqres.in/api/users?page=2")
            console.log("aman",resp)
            setReqdetails(resp)          
        } catch (error) {
            console.log(error);
        }
    }
    return <>
      <button onClick={getDataUsingFetch}>Fetch Data using fetch</button>
      <button onClick={getDataUsingAxios}>fetch data using axios</button>
    </>
}