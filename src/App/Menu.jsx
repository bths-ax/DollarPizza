import plainSlice from './assets/plain.jpg'

function MenuItem({ name, description, image, price }) {
	return (
		<div className='menu-item'>
			<img src={image} />
			<h4>{name}</h4>
			<p>{description}</p>
			<hr />
			<p>Price: {price}</p>
		</div>
	)
}

export default function Menu() {
	return (
		<div className='menu'>
			<div className='menu-title'>
				<h2>New York&apos;s World Famous</h2>
				<h3>Pizza Menu</h3>
			</div>

			<div className='menu-items'>
				<MenuItem
					name='Plain Slice'
					description="It's got cheese, it's got tomato sauce, and it's only a dollar. What more could you ask for?"
					image={plainSlice}
					price='$1.00'
				/>
			</div>
		</div>
	)
}
