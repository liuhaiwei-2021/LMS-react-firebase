import React from "react";

function Profile({ user }) {
	const { name, email, isTeacher } = user;
	return (
		<div class="card">
			{/* <img src="/w3images/team2.jpg" alt="John" style="width:100%" /> */}
			<h1>{name}</h1>
			<p>Novare University</p>
			{/* <div style="margin: 24px 0;">
				<a href="#">
					<i class="fa fa-dribbble"></i>
				</a>
				<a href="#">
					<i class="fa fa-twitter"></i>
				</a>
				<a href="#">
					<i class="fa fa-linkedin"></i>
				</a>
				<a href="#">
					<i class="fa fa-facebook"></i>
				</a>
			</div> */}
			<p>
				<button>Contact</button>
			</p>
		</div>
	);
}

export default Profile;
