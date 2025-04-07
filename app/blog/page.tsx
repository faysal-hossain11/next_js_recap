import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <h1 className="text-center font-bold mt-5">blog page</h1>
            <Link href={'/blog/article'}>article</Link>
        </div>
    );
};

export default BlogPage;