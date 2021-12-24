import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NotFound() {

  const router = useRouter()

  useEffect(() => {

    document.title = "404 Page"

    setTimeout(() => {
      router.push("/")
    }, 3000)
    
  }, [router])

  return (
    <div className='not-found'>
      <h1>Ooopss....</h1>
      <h3>That page cannot be found!</h3>
      <Link href="/"><a>Go back to the home page</a></Link>
    </div>
  );
}
export default NotFound;