import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(13);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(100 / itemsPerPage); // JSONPlaceholder has 100 posts in total
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      {/* Render paginated data */}
      {currentItems.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}

      {/* Render pagination controls */}
      <div>
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
	<div>
		
	<button 
          onClick={() => setItemsPerPage(10)}
        >
          10
        </button>
	<button 
          onClick={() => setItemsPerPage(20)}
        >
          20
        </button>
	</div>
    </div>
  );
}

export default App;
