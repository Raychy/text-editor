import React, { useState } from 'react';

const PHOTO_URL =
  "https://www.kindacode.com/wp-content/uploads/2021/06/cute-dog.jpeg";

const LeftSideComponent = () => {

  const [content, setContent] = useState<string>("Drop Image Here");
  const [contentText, setContentText] = useState<string>("Drop Text Here");

  // This function will be triggered when initial dragging starts
  const dragStartHandlerImage = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ) => {
    event.dataTransfer.setData("image", data);
  };
  const dragStartHandlerText = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ) => {
    event.dataTransfer.setData("text", data);
  };
  
  // This function will be triggered when dropping
  const dropHandlerText = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    setContentText(data);
  };


  // This makes the Text input  become droppable
  const allowDropText = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  // This makes the Image  become droppable
  const allowDropImage = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div
        className="box1"
        onDragStart={(event) => dragStartHandlerText(event, 'textarea')}
        draggable={true}
      >
        <div className="form-group">
          <label>Input Text</label>
          <input type="text" name="text" id="text-file" className="text-file" readOnly />
        </div>
      </div>
      <label>Image</label>
      <div
        className="box2"
        onDragStart={(event) => dragStartHandlerImage(event, PHOTO_URL)}
        draggable={true}
      >
        <img src={PHOTO_URL} alt="Cute Dog" />
      </div>


    </div>
  );
}

export default LeftSideComponent;