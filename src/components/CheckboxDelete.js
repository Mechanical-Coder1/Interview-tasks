import React, { useState } from "react";

const CheckboxDelete = () => {
  const [list, setList] = useState(["cricket", "vollyball", "chess"]);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleChange = (index) => {
    setSelectedIdx(index);
  };

  const handleDelete = (index) => {
    // console.log(index);
    if (selectedIdx === index) {
      const updatedList = [...list];
      updatedList.splice(index, 1);
      setList(updatedList);
      setSelectedIdx(null);
    }
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedIdx === index}
              onChange={() => handleChange(index)}
            />
            {item}
            {selectedIdx === index && (
              <button
                className="bg-blue-500 text-white p-1 m-2 rounded-lg"
                onClick={() => handleDelete(index)}
              >
                delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxDelete;
