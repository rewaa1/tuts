import React from 'react'
import { useLoaderData, Link, NavLink } from 'react-router-dom'


export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className='careers'>
      {careers.map((career, index) => (
        <div key={career.id} className={index % 2 === 0 ? 'bg-black' : ' bg-slate-400'}>
          {/* Use 'bg-black' for even index, and 'bg-gray' for odd index */}
          <Link to={career.id.toString()}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}



export const careerLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')
    
    if(!res.ok){
      throw Error('Couldnt fetch Career')
    }

    return res.json()
}