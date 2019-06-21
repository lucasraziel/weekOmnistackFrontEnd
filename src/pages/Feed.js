import React, { Component } from 'react';
import './Feed.css';

import more from '../assets/more.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';
import like from '../assets/like.svg';

class Feed extends Component {
	render() {
		return (
			<section id="post-list">
				<article>
					<header>
						<div className="user-info">
							<span>Lucas Rego</span>
							<span className="place">Aracaju</span>
						</div>
						<img src={more} alt="" />
					</header>
					<img src="http://localhost:3333/files/profile.jpg" alt="" />
					<footer>
						<div className="actions">
							<img src={like} alt="" />
							<img src={comment} alt="" />
							<img src={send} alt="" />
						</div>
						<strong>900 curtidas</strong>
						<p>
							Um post legal<span>#hashtags</span>
						</p>
					</footer>
				</article>
			</section>
		);
	}
}

export default Feed;
