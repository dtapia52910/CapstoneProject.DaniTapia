import black_jacket from '../assets/BlackJacket.jpg'
import gold_rings from '../assets/GoldRings.jpg'
import white_tee from '../assets/WhiteTee.jpg'

function Home() {
  return (
    <section>
      <h1>Dani's E-Commerce App</h1>
      <img src={black_jacket} />
      <img src={gold_rings} />
      <img src={white_tee} />
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
    </section>
  );
}

export default Home;