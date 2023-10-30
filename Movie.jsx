import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Movie({title,id,poster_path,release_date}) {
  const imagePath= "https://image.tmdb.org/t/p/original"
   
    return (
    <div>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <Link href={`/${id}`}>
            <Image 
                src={imagePath+poster_path} 
                width={250} 
                height={250} 
                alt='TMDB IMAGE' 
            /> 
        </Link>
    </div>
  )
}

export default Movie