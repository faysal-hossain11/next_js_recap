import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1 className="mt-5 text-center text-4xl font-bold">this is the about page</h1>
            <Link href={'/'} className='text-blue-500 text-center block '>Go to the Home page </Link>
        </div>
    );
};

export default AboutPage;