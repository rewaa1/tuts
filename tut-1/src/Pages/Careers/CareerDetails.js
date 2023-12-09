import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()

  return (
    <div className="career-details">
        <h2>CareerDetails for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>location: {career.location}</p>
        <div className='details'>
          <p>some recless data u cant find any perpose or meaning in them</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params
  
  const res = await fetch('http://localhost:4000/careers/' + id)

  if(!res.ok){
    throw Error('Couldnt Find Career')
  }

  return res.json()
}