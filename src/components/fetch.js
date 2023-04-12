const postURL = 'https://jsonplaceholder.typicode.com/posts'
const imageURL = 'https://api.thecatapi.com/v1/images/search'

const fetchPostURL = fetch(postURL)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		putData(data)
		putImg()
	}).catch((err) => {
		console.error(err)
	})



function putData(data) {
	let li = '';
	let btnCounter = 0;


	document.querySelector('#show').addEventListener('click', () => {
		btnCounter += 10
		document.querySelector('#show').textContent = `show more`
		for (let i = btnCounter - 10; i < btnCounter; i++) {
			if (data.length <= i) {
				alert(`Sorry but we only had ${data.length} users`)
				return
			}

			li = `
					<li class="show__item">
					<div>
					<span class="show__item-title">${
						data[i].title.charAt(0).toUpperCase() + data[i].title.slice(1) + ' ID: ' + data[i].id
					}</span>
					</div>
					<span class="show__item-body">${data[i].body}</span>
					</li>
					`

			document.querySelector('.show__items').insertAdjacentHTML('beforebegin', li)
		}
	})
}

export default fetchPostURL