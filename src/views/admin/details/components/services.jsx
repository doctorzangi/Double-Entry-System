// 

// import React from 'react';

// const Service = () => {
//   // Sample data for services
//   const services = [
//     {
//       id: 1,
//       name: 'Website Development',
//       description: 'Professional website development services tailored to your needs.',
//       price: '$500 - $2000',
//       category: 'Web Development',
//     },
//     {
//       id: 2,
//       name: 'Graphic Design',
//       description: 'Creative graphic design services for branding, marketing materials, and more.',
//       price: '$100 - $500',
//       category: 'Design',
//     },
//     {
//       id: 3,
//       name: 'Digital Marketing',
//       description: 'Comprehensive digital marketing solutions to grow your online presence.',
//       price: '$200 - $1000',
//       category: 'Marketing',
//     },
//     // Add more services as needed
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {services.map(service => (
//           <div key={service.id} className="bg-white rounded-lg p-4 shadow-md">
//             <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
//             <p className="text-gray-600 mb-2">{service.description}</p>
//             <p className="text-gray-700 mb-2">Price: {service.price}</p>
//             <p className="text-gray-700">Category: {service.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Service;
// 0


import React from 'react';

const Services = () => {
  // Sample data for your services
  const services = [
    {
      id: 1,
      name: 'Netflix',
      description: 'Subscription for streaming movies and TV shows.',
      category: 'Entertainment',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Electricity Bill',
      description: 'Monthly bill for electricity usage.',
      category: 'Utilities',
      status: 'Paid',
    },
    {
      id: 3,
      name: 'Gas Bill',
      description: 'Monthly bill for gas usage.',
      category: 'Utilities',
      status: 'Pending',
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <p className="text-gray-700 mb-2">Category: {service.category}</p>
            <p className={`text-gray-700 ${service.status === 'Active' ? 'text-green-600' : service.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>Status: {service.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
