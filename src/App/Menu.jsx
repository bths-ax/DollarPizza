import plainSlice from './assets/plain.jpg'
import pepperoniSlice from './assets/pepperoni.jpg'
import meatSlice from './assets/meat.jpg'
import veggieSlice from './assets/veggie.jpeg'
import hawaiianSlice from './assets/hawaiian.jpg'
import bbqSlice from './assets/bbq.jpg'

function MenuItem({ name, description, image, price }) {
	return (
		<div className='menu-item'>
			<div className='menu-item-img'>
				<img src={image} />
			</div>
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
				<MenuItem
					name='Pepperoni'
					description="A classic slice with cheese, sauce, and guess what else... that's right, pepperoni."
					image={pepperoniSlice}
					price='$1.00'
				/>
				<MenuItem
					name="Meat Lover's Slice"
					description='Pepperoni not enough meat for you? Well this slice has pepperoni, meatballs, and sausage.'
					image={meatSlice}
					price='$1.00'
				/>
				<MenuItem
					name='Veggie Slice'
					description="You trying to be healthy but you still can't resist pizza? Well then the veggie slice is for you! This is guilt-free pizza at its finest."
					image={veggieSlice}
					price='$1.00'
				/>
				<MenuItem
					name='Hawaiian Slice'
					description="We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
					image={hawaiianSlice}
					price='$1.00'
				/>
				<MenuItem
					name='BBQ Chicken'
					description='Perhaps the most popular slice we offer. BBQ Chicken over a delicious dollar pizza. What more could one want in life?'
					image={bbqSlice}
					price='$1.00'
				/>
			</div>
		</div>
	)
}
