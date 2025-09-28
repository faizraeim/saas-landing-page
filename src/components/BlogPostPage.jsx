import {React, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/data';

const BlogPostPage = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Find the blog post that matches the ID from the URL
  // Use 'find' instead of 'filter' to get the single object.
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  // Handle case where the blog post is not found
  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  // Render the full content of the found blog post
  return (
    <>
    <Header />
    <div className="blog-post-page m-auto flex items-center justify-center flex-col py-9">
      <img src={blog.image} alt={blog.title} className='w-2xl '/>
      <h1 className='text-2xl font-semibold mt-10'>{blog.title}</h1>
      <p className='mb-10 text-secondary'>By {blog.author} | {blog.date} | {blog.readTime} read</p>
      <div className="blog-content">
        {/* Placeholder for the full blog content. 
        You can replace this with a 'content' property in your data.js file. */}
        <p className='w-2xl mb-4'>This is the full content of the blog post. In a real application, you would have a `content` key in your `data.js` for this.</p>
        <p className='w-2xl'>The summary was: "{blog.summary}"</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BlogPostPage;
