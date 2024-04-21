import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <section  className={css.section}>
      <div className="container">
        <h1 className={css.title}>6 Benefits of Renting a Camper in Ukraine</h1>
        <p className={css.text}>Staying in a hotel is expensive and it distances you from your surroundings. Camping puts you in the midst of nature, but sleeping on the ground for many nights in a row can become uncomfortable. You can bring comfort to your camping trip while still spending plenty of time outdoors by renting a camper van. In fact, there are numerous benefits to this way of traveling.</p>
        <ul>
          <li className={css.item}>
            <h2>1. It’s Affordable</h2>
            <p>A camper van is one of the most affordable ways to explore the islands since it is your accommodations and transportation, combined. If you’re seeking a budget-friendly way to travel, a camper van rental is an excellent way to save.</p>
          </li>
          <li className={css.item}>
            <h2>2. You’ll Be Comfortable and Safe</h2>
            <p>
              Whenever you tire of sleeping on the ground, simply search for a campground that allows campers to sleep in their vehicles. While tucked away in your van, you’ll have a soft mattress and be safe from adverse weather and wildlife.
            </p>
          </li>
          <li className={css.item}>
            <h2>3. Feel Like Home</h2>
            <p>
              The interior of a rental van is comfortable enough to feel like home. Choose among features like a fridge, pop top bed, bathroom, and even a built-in kitchen to enjoy comfort and convenience during your trip.
            </p>
          </li>
          <li className={css.item}>
            <h2>4. Freedom</h2>
            <p>
              A camper van can go anywhere a car can drive. Unlike with an RV, there’s no extra planning needed to figure out what routes are suitable and where there will be large enough parking spaces. You can maneuver down narrow winding roads, park your camper in a grocery store parking stall or parallel park on the side of the street.
            </p>
          </li>
          <li className={css.item}>
            <h2>5. The Experience Is Stress Free</h2>
            <p>
              With a camper van, you can get up in the morning and just leave — there’s no dismantling your tent and setting it up again later. Your camper van becomes your home, waiting for you after every excursion.
            </p>
          </li>
          <li className={css.item}>
            <h2>6. You Can Prepare Your Own Meals on the Road</h2>
            <p>
              Camper vans have a fridge and a built-in or camp kitchen on board. Not only can you store plenty of food for your trip, you can also prepare tasty meals and snacks whenever you like and save on the cost of having to eat out for every meal. For an Oahu camper van rental, your top choice is Campervan Hawaii. You’ll be able to go anywhere you wish across the island, camping in forests and on beaches in the van of your choice. Make your reservation now.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HomePage







