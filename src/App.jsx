import { useState } from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./store/dataSlice";



function App() {
  let dispatch = useDispatch();

  useEffect(() => {

    fetch('http://localhost:3000').then(res => res.json()).then(data => dispatch(addData(data))).catch(err => console.log("ERR : " + err))

  }, [])


  let data = useSelector(state => state.data)

  return (
    <>
      <center style={{ marginTop: '100px' }}>
        {
          <table>
            {
              data.map((d) => (<tr><td>ID : {d.id}</td><td> And </td><td> Name : {d.name}</td></tr>))
            }
          </table>

        }
      </center>
    </>
  )
}

export default App
