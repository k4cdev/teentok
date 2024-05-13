'use client';


import { Mentor } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

interface Props {
  mentor: Mentor;
}


export const MentorGridItem = ( { mentor }: Props ) => {

//   const [ displayImage, setDisplayImage ] = useState( product.images[ 0 ] );


  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={ `/mentor/${ mentor.slug }` }>
        <Image
          src={ `/mentors/${ mentor.images }` }
          alt={ mentor.name }
          className="w-full object-cover rounded"
          width={ 500 }
          height={ 500 }
        //   onMouseEnter={ () => setDisplayImage( mentor.images[1] )  }
        //   onMouseLeave={ () => setDisplayImage( mentor.images[0] ) }
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={ `/mentor/${ mentor.slug }` }>
          
          <span className="font-bold">{ mentor.name }</span>
        </Link>
        {`${ mentor.role } at ${ mentor.job }`}
      </div>

    </div>
  );
};