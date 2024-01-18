import logo from './assets/pizza.png'

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='company'>
				<img src={logo} />
				<h1>Jeff&apos;s Dollar Pizza</h1>
			</div>

			<div className='nav'>
				<a href='#'>Home</a>
				<a href='#'>Order</a>
				<a href='#'>About Us</a>
			</div>
		</div>
	)
}
