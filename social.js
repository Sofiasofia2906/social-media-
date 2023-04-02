// When the user submits a post
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault(); // prevent the form from submitting
	var postContent = document.querySelector('form textarea').value;
	if (postContent !== '') {
		// create a new post element
		var postElement = document.createElement('article');
		postElement.innerHTML = `
			<header>
				<h2>You</h2>
				<time>just now</time>
			</header>
			<p>${postContent}</p>
			<footer>
				<button>Like</button>
				<button>Comment</button>
				<button>Share</button>
			</footer>
		`;
		// insert the new post at the beginning of the list
		document.querySelector('main section').insertAdjacentElement('afterbegin', postElement);
		// clear the post textarea
		document.querySelector('form textarea').value = '';
	}
});

// When the user clicks the "Like" button on a post
document.querySelectorAll('article button')[0].addEventListener('click', function(event) {
	event.preventDefault(); // prevent the default button action
	this.textContent = 'Liked';
});

// When the user clicks the "Comment" button on a post
document.querySelectorAll('article button')[1].addEventListener('click', function(event) {
	event.preventDefault(); // prevent the default button action
	var commentContent = prompt('Enter your comment:');
	if (commentContent !== '') {
		// create a new comment element
		var commentElement = document.createElement('p');
		commentElement.innerHTML = `<strong>You:</strong> ${commentContent}`;
		// insert the new comment after the post content
		this.parentNode.parentNode.querySelector('p').insertAdjacentElement('afterend', commentElement);
	}
});

// When the user clicks the "Share" button on a post
document.querySelectorAll('article button')[2].addEventListener('click', function(event) {
	event.preventDefault(); // prevent the default button action
	alert('Post shared!');
});
