import React, { useState } from 'react';

function MenuItem(props) {
  const { name, image, description } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="card bg-base-100 w-96 h-11/12 shadow-2xl mb-10" >
        <figure className="relative w-full h-48">
  
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-base-100 z-10">
              <div className="text-lg font-semibold">Loading...</div>
            </div>
          )}
          <img
            src={image}
            alt="Burgerz"
            onLoad={() => setIsLoading(false)} 
            onError={() => setIsLoading(false)} 
            className={`transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-4 m-2">130 gr.</div>
            <div className="badge badge-outline p-4 m-2">200 gr.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
