

const Hero = () => {
  return (
   <main className="herosection container">
    <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolore blanditiis totam voluptatibus ex sequi inventore, ipsam commodi beatae quo, sint explicabo architecto quam? Vero, voluptatum aut.</p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Available On</p>
        </div>
        <div className="brand-icon">
            <img src="../public/images/amazon.png" alt="amezone logo" />
            <img src="../public/images/flipkart.png" alt="Flipkart logo" />
        </div>
    </div>
    <div className="hero-img">
        <img src="../public/images/shoe_image.png" alt="Flipkart logo" />
    </div>
   </main>
  )
}

export default Hero
