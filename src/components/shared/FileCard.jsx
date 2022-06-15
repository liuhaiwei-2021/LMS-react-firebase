import React from "react";

function FileCard({ file }) {
	const { resourseFileURL, resourseName } = file;
	return (
		<div className="file">
			<a href={resourseFileURL}>{resourseName}</a>
		</div>
	);
}

export default FileCard;
