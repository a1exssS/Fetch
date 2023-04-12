const imageURL = 'https://api.thecatapi.com/v1/images/search';
const postURL = 'https://jsonplaceholder.typicode.com/posts';

const image = fetch(imageURL).then(response => response.json());
const post = fetch(postURL).then(response => response.json());

export default Promise.all([image, post])
	.then(([image, post]) => {
		let li = '';
		let btnCounter = 0;
		document.querySelector('#show').addEventListener('click', () => {
			btnCounter += 10
			document.querySelector('#show').textContent = `show more`
			for (let i = btnCounter - 10; i < btnCounter; i++) {
				if (post.length <= i) {
					alert(`Sorry but we only had ${post.length} users`)
					return
				}

				li = `
					<li class="show__item">
						<div>
							<img class="show__img" src="${image[0].url}"/>
								<span class="show__item-title">${
								post[i].title.charAt(0).toUpperCase() + post[i].title.slice(1) + ' ID: ' + post[i].id
								}</span>
						</div>
						<span class="show__item-body">${post[i].body}</span>
					</li>
					`

				document.querySelector('.show__items').insertAdjacentHTML('beforebegin', li)
			}
		})

	})
	.catch(error => console.error(error));