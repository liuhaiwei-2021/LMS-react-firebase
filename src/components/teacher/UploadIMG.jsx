export default function UploadIMG({ onImageChoose }) {
	return (
		<div className="upload-img">
			<label className="custom-file-upload" htmlFor="file-upload">
				img
			</label>

			<input
				onChange={onImageChoose}
				id="file-upload"
				className="file-upload"
				type="file"
				accept="image/png, image/jpg"
				required
			/>
		</div>
	);
}
