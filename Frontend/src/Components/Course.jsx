import React, { useEffect } from 'react'
// import List from '../../public/List.json'
import axios from 'axios'
import Card from './Card'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Course() {
  const [book,setbook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4100/book/")
        console.log(res.data)
        setbook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          We'are delighted to have you <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-12'>
          Here you get a huge library of books containing a variety of books
        </p>
        <Link to='/'>
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mr-12 grid grid-cols-1 md:grid-cols-4'>
      {book.map((item)=>(
        <Card item={item} key = {item.id}/>
       ))}
      </div>
    </div>
    </>
  )
}

export default Course
