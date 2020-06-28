import React from "react";

export default ({ comments }) => {
  const renderedPostComments = Object.values(comments).map((comment) => {
    return <li>{comment.content}</li>;
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <ul>{renderedPostComments}</ul>
    </div>
  );
};
