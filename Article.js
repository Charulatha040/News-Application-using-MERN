import React, { useState } from 'react';
import axios from 'axios';

function AddArticle() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/articles', { title, content, author })
            .then(() => alert('Article added successfully!'))
            .catch(error => console.error('Error adding article:', error));
    };

    return (
        <div className="add-article">
            <h2>Add New Article</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddArticle;
