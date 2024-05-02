import React from 'react';

const testimonials = [
  { username: 'The username', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' },
  { username: 'The username', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' },
  { username: 'The username', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' },
  { username: 'The username', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' },
  { username: 'The username', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' },
];

const TestimonialCard = ({ username, content }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden">
        {/* Placeholder for the user image */}
        <img src="https://via.placeholder.com/150" alt="User" />
      </div>
      <h5 className="text-lg font-bold">{username}</h5>
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

const TestimonialsPage = () => (
  <div className="max-w-4xl mx-auto p-4">
    <h1 className="text-2xl font-bold text-center mb-6">Testimonials: Stories of Transformation</h1>
    <div className="space-y-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default TestimonialsPage;

