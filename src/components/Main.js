import restauranfood from "./../assets/restauranfood.jpg"
import greekSalad from "./../assets/greek salad.jpg"
import bruchetta from "./../assets/bruchetta.svg"
import lemonDesset from "./../assets/lemon dessert.jpg"


const Reserve=()=>{
    return(
        <div>
            <div className="reserveTable-section">
                <div className="reserveTable-description">
                    <h1 style={{color:'#F4CE14'}}>Little Lemon</h1>
                    <h3 style={{color:'white'}}>Chicago</h3>
                    <p style={{color:'white'}}>We are a family owned<br/>Mediterranean Restaurant,<br/>focused on traditional<br/> recipes serverd with a modern<br/> twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div>
                    <img src={restauranfood} alt="restaurant food" style={{ width: '200px', height: '150px', marginRight: '150px', marginTop: '130px'}}/>
                </div>
            </div>
            <div className="specials-section">
                <div className="week-special">
                    <h2>This weeks specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className="card-section">
                    <div className="card">
                        <div className="image-container">
                            <img src={greekSalad} alt="greek salad"/>
                        </div>
                        <div>
                            <h2>Greek salad <span style={{ marginLeft: '20px' }}>$12.00</span></h2>
                        </div>
                        <p>The famous greek salad of<br/>crispy,lettuce, peppers,olives<br/> and our Chicago style teta<br/> cheese, garnished with <br/>crunch garlic and rosemary <br/>croutons. </p>
                        <h3>Order a delivery $2</h3>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <img src={bruchetta} alt="greek salad"/>
                        </div>
                        <div>
                            <h2>Bruchetta <span style={{ marginLeft: '20px' }}>$5.99</span></h2>
                        </div>
                        <p>Our Bruschetta is made from <br/>grilled bread that has been<br/> smeared with garlic and<br/> seasoned with salt and olive <br/>oil</p>
                        <h3>Order a delivery $2</h3>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <img src={lemonDesset} alt="greek salad"/>
                        </div>
                        <div>
                            <h2>Lemon Dessert <span style={{ marginLeft: '20px' }}>$5.00</span></h2>
                        </div>
                        <p>
                            This comes straight from<br/>grandma's recipe book.<br/>Every last ingredient has been<br/>sourced and is as authentic<br/>as can be imagined. 
                        </p>
                        <h3>Order a delivery $2</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reserve