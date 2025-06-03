import './Home.css';

function Home() {
  const vegMenu = [
    { name: "Paneer Butter Masala", price: "₹300" },
    { name: "Veg Biryani", price: "₹200" },
    { name: "Chole Bhature", price: "₹300" },
     { name: "Dal Makhani", price: "₹150" },
    { name: "Aloo Gobi", price: "₹100" },
    { name: "Mixed Vegetable Curry", price: "₹120" },
    { name: "Palak Paneer", price: "₹180" },
    { name: "Vegetable Samosa", price: "₹60" },
    { name: "Paneer Tikka", price: "₹140" },
    { name: "Veg Pakora", price: "₹100" },
  ];

  const nonVegMenu = [
    { name: "Chicken Curry", price: "₹200" },
    { name: "Mutton Biryani", price: "₹320" },
    { name: "Fish Fry", price: "₹180" },
    { name: "Egg Curry", price: "₹100" },
    { name: "Chicken Tikka", price: "₹150" },
    { name: "Prawn Masala", price: "₹200" },
    { name: "Mutton Rogan Josh", price: "₹350" },
    { name: "Chicken Biryani", price: "₹250" },
    { name: "Fish Curry", price: "₹150" },
    { name: "Tandoori Chicken", price: "₹200" },
  ];

  return (
     
    <div className="home">
       
      <h1>Welcome to Our Restaurant</h1>

      <section>
        <h2>Vegetarian Menu</h2>
         
         
        <ul>
          {vegMenu.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
 
      </section>
      <section>
        <h2>Non-Vegetarian Menu</h2>
        <ul>
          {nonVegMenu.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </section>
      <div class="c1">
        <img src="https://assets.gqindia.com/photos/5edf897e0f82d6d3cee5f0a7/16:9/w_1920,c_limit/veg-biryani-recipes.jpg "  />
      </div>
      <div class="c2"> 
        <img src="https://as1.ftcdn.net/v2/jpg/04/86/31/00/1000_F_486310052_Rmgg6kkKsHyxF6c4Za8ZujcO3nND1aCL.jpg"></img>
      </div>
    </div>
  );
}

export default Home;
