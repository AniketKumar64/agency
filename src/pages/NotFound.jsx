import React from 'react'

const NotFound = () => {
  return (
    <div>
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600">Page Not Found</p>
        <p className="mt-4 text-gray-500">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Go Back Home</a>
      </div>
    </div>
 
    
     
  </div>
  )
}

export default NotFound