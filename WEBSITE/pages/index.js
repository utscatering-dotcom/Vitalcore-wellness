export default function Home() {
  const brandName = "VitalCore Wellness";
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-teal-600">{brandName}</h1>
        <nav className="space-x-6">
          <a href="#programs" className="hover:text-orange-500">Programs</a>
          <a href="#meals" className="hover:text-orange-500">Meals</a>
          <a href="#apparel" className="hover:text-orange-500">Apparel</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </nav>
      </header>

      <section className="p-12 text-center bg-gradient-to-r from-teal-50 to-green-50">
        <img src="https://source.unsplash.com/1200x400/?fitness,beach" alt="VitalCore Training" className="mx-auto rounded-2xl shadow-md mb-6" />
        <h2 className="text-4xl font-bold mb-4 text-teal-700">Train. Fuel. Look Good.</h2>
        <p className="text-lg mb-6 text-gray-700">Personal training, fitness programs, healthy meals, and apparel — all in one place.</p>
        <button className="bg-orange-500 text-white rounded-2xl px-6 py-3">Join the Movement</button>
      </section>

      <section id="programs" className="p-12">
        <h3 className="text-3xl font-bold mb-8 text-center text-teal-700">Fitness Programs</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Weight Loss Program", desc: "Burn fat with structured workouts & nutrition guidance.", img: "https://source.unsplash.com/400x300/?running,fitness" },
            { title: "Muscle Gain Program", desc: "Progressive strength training for lean muscle growth.", img: "https://source.unsplash.com/400x300/?strength,gym" },
            { title: "Cardio & Endurance Program", desc: "Boost stamina and cardiovascular health.", img: "https://source.unsplash.com/400x300/?cycling,cardio" }
          ].map((prog, idx) => (
            <div key={idx} className="shadow-md rounded-2xl overflow-hidden bg-white">
              <img src={prog.img} alt={prog.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{prog.title}</h4>
                <p className="text-gray-600 mb-4">{prog.desc}</p>
                <button className="bg-teal-600 text-white rounded-xl px-4 py-2">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="meals" className="p-12 bg-gray-50">
        <h3 className="text-3xl font-bold mb-8 text-center text-teal-700">{brandName} Frozen Meals</h3>
        <p className="text-center mb-6">Weekly preorders • Delivery: Ballito → Umdloti → Tongaat → Verulam</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Chicken & Brown Rice Bowl", price: "R85/meal", img: "https://source.unsplash.com/400x300/?healthy,chicken" },
            { name: "Beef Stir-Fry with Veg", price: "R90/meal", img: "https://source.unsplash.com/400x300/?beef,vegetables" },
            { name: "Vegan Chickpea Curry", price: "R80/meal", img: "https://source.unsplash.com/400x300/?vegan,healthyfood" }
          ].map((meal, idx) => (
            <div key={idx} className="shadow-md rounded-2xl overflow-hidden bg-white">
              <img src={meal.img} alt={meal.name} className="h-40 w-full object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">{meal.name}</h4>
                <p className="text-gray-600 mb-2">{meal.price}</p>
                <button className="bg-teal-600 text-white rounded-xl px-4 py-2">Preorder Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="apparel" className="p-12">
        <h3 className="text-3xl font-bold mb-8 text-center text-teal-700">Gym Apparel</h3>
        <div className="text-center">
          <img src="https://source.unsplash.com/600x400/?sportswear,fitness" alt="Apparel Coming Soon" className="mx-auto rounded-2xl shadow-md mb-6" />
          <p className="text-lg mb-4">Our curated {brandName} apparel line + authorised brands like Nike are on the way.</p>
          <button className="bg-orange-500 text-white rounded-xl px-4 py-2">Coming Soon – Join Waitlist</button>
        </div>
      </section>

      <section id="contact" className="p-12 bg-teal-50 text-center">
        <h3 className="text-3xl font-bold mb-4 text-teal-700">Get in Touch</h3>
        <img src="https://source.unsplash.com/800x300/?ballito,beach" alt="Ballito Beach" className="mx-auto rounded-2xl shadow-md mb-6" />
        <p className="mb-4">Based in Ballito (near Junction Mall) • WhatsApp: 071 385 1401</p>
        <button className="bg-green-600 text-white rounded-2xl px-6 py-3">WhatsApp Us</button>
      </section>

      <footer className="p-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </footer>
    </div>
  );
}
