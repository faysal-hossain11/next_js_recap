import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-6">Home page</h1>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/about'}>About</Link>
    </div>
  );
};

export default HomePage;