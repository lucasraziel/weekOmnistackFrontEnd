import React, { Component } from 'react';
import './New.css';
import api from '../services/api';

class New extends Component {
	state = {
		image: null,
		author: '',
		place: '',
		description: '',
		hashtags: ''
	};

	handleSubmit = async event => {
		event.preventDefault();

		const data = new FormData();

		data.append('image', this.state.image);
		data.append('author', this.state.author);
		data.append('place', this.state.place);
		data.append('description', this.state.description);
		data.append('hashtags', this.state.hashtags);

		await api.post('posts', data);

		this.props.history.push('/');
	};

	handleImageChange = event => {
		this.setState({ image: event.target.files[0] });
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<form id="new-post" onSubmit={this.handleSubmit}>
				<input type="file" onChange={this.handleImageChange} />
				<input
					type="text"
					name="author"
					placeholder="Autor"
					value={this.state.author}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="place"
					placeholder="Local"
					value={this.state.place}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="description"
					placeholder="Descrição"
					value={this.state.description}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="hashtags"
					placeholder="Hashtags"
					value={this.state.hashtags}
					onChange={this.handleChange}
				/>
				<button type="submit">Enviar</button>
			</form>
		);
	}
}

export default New;
