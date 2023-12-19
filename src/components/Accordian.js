import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'Why use React?',
      content:
        'React allows developers to build reusable UI components and efficiently update and render data changes.',
    },
    {
      title: 'How to learn React?',
      content:
        'To learn React, start with the official documentation and build small projects to practice your skills.',
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index}>
          <div
            className='flex justify-between m-8 p-2 bg-gray-800 text-white cursor-pointer'
            onClick={() => handleClick(index)}
          >
            <div>{item.title}</div>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
