export default function UploadFile({ onFileChoose }) {
	return (
		<div className="upload-img">
			<label className="custom-file-upload" htmlFor="file-upload">
				Resources:
			</label>

			<input
				onChange={onFileChoose}
				id="file-upload"
				className="file-upload"
				type="file"
				accept=".pdf"
				required
			/>
		</div>
	);
}
