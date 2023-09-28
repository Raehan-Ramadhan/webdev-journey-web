import "./gallery.css";

export default function Gallery() {
	return (
		<div className="gallery">
			<div className="left-side">
				<div className="details">
					<div className="text-container">
						<span>github.com</span>
						<h1>Code hosting platform</h1>
						<p className="desc">
							It lets you and others work together on projects from anywhere.
						</p>
						<div className="btn"></div>
					</div>
				</div>
				<div className="details">
					<div className="text-container">
						<span>Instagram.com</span>
						<h1>Photo and video sharing</h1>
						<p className="desc">
							A simple, fun & creative way to capture, edit & share photos,
							videos & messages.
						</p>
						<div className="btn"></div>
					</div>
				</div>
				<div className="details">
					<div className="text-container">
						<span>Spotify.com</span>
						<h1>Media service provider</h1>
						<p className="desc">
							A digital music, podcast, and video service that gives you access
							to millions of content.
						</p>
						<div className="btn"></div>
					</div>
				</div>
				<div className="details">
					<div className="text-container">
						<span>Youtube.com</span>
						<h1>Online video platform</h1>
						<p className="desc">
							An online video sharing and social media platform accessible
							worldwide.
						</p>
						<div className="btn"></div>
					</div>
				</div>
			</div>
			<div className="right-side pin">
				<div className="image-container">
					<div className="image no1"></div>
					<div className="image no2"></div>
					<div className="image no3"></div>
					<div className="image no4"></div>
				</div>
			</div>
		</div>
	);
}
