const newComment = async (event) => {
    event.preventDefault();
    console.log('start posting comment')
    const comment_text = document.querySelector('#comment-text').value.trim();
    const post_IDs = window.location.toString().split('/');
    const post_id = post_IDs[4];
    if (comment_text && post_id) {
      const response = await fetch(`/api/comments/`, {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        location.reload();
      } else {
        alert('Failed to create comment!');
      };
    };
};



document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newComment);