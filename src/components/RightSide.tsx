import React, { useState } from 'react';

const RightSideComponent = () => {

    const [contentText, setContentText] = useState<string>("Drop Text Here");
    const [content, setContent] = useState<string>("Drop Image Here")

     // This function will be triggered when dropping
    const dropHandlerImage = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("image");
        setContent(data);
    };
    const dropHandlerText = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        setContentText(data);
    };
    // This makes the Image  become droppable
    const allowDropImage = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    // This makes the Text input  become droppable
    const allowDropText = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="right-side">
            <div className="box3" onDragOver={allowDropText} onDrop={dropHandlerText}>
                {contentText === 'textarea' ? <textarea name="textarea" id="" ></textarea> : <h2 className="dropp ">Drop Input box here</h2>}

            </div>
            <div className="box4" onDragOver={allowDropImage} onDrop={dropHandlerImage}>
                {content.endsWith(".jpeg") ? <input type="file" name="file" id="file" className="drop-file" /> : <h2 className="dropp">Drop Image Here</h2>}
            </div>
        </div>
    );
}

export default RightSideComponent;