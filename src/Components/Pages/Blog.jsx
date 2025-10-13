import React from 'react';
import blogimg from '../../../public/Frame 8.png'


const Blog = () => {
    return (
        <div className='max-w-6xl mt-10 mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blogimg}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Unknown Tips to stay helthy</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Reed More</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Blog;