import logo from './img/logo.png';
import foto from './img/game.png';
import './App.css';
import './videos'



function App() {
  return (
    <div id='main-container'>
      <header>
        <nav>
          <div className='mobile'>
            <div className='header'>
              <button id='bmenu'>
              <span class="material-icons">&#xe5d2;</span>
              </button>
              <a href="#"><img src={logo} width='150'/></a>
              <div>
                <a href="#"><span class="material-icons">&#xe8cc;</span></a>
                <a href="#"><span class="material-icons">&#xe853;</span></a>
              </div>
            </div>
            <div class="links">
              <a href="#">Game Pass</a>
              <a href="#">Games</a>
              <a href="#">Devices</a>
              <a href="#">Cloud Gaming</a>
              <a href="#">Community</a>
              <a href="#">Support</a>
              <a href="#">My Xbox</a>
              <a href="#">All Microsoft</a>
              <a href="#">Search</a>
            </div>
          </div>
          <ul>
            <li><a href="#"><img src={logo} width="100"/></a></li>
            <li><a href="#" class="link">Game Pass</a></li>
            <li><a href="#" class="link">Games</a></li>
            <li><a href="#" class="link link-hide">Devices</a></li>
            <li><a href="#" class="link link-hide">Cloud Gaming</a></li>
            <li><a href="#" class="link link-hide">Community</a></li>
            <li><a href="#" class="link link-hide">Support</a></li>
            <li><a href="#" class="link link-hide">My Xbox</a></li>
            <li class="more">
                 <a href="#" class="link" id="bmore">More</a>
                 <div class="menu">
                    <a href="#">Devices</a>
                    <a href="#">Cloud Gaming</a>
                    <a href="#">Community</a>
                    <a href="#">Support</a>
                    <a href="#">My Xbox</a>
                  </div>
            </li>
          </ul>
          <ul>
            <li><a href="#" class="link">Search</a></li>
            <li><a href="#" class="link">Cart</a></li>
            <li><a href="#" class="link">Sign In</a></li>
          </ul>
        </nav>
      </header>
      <section id="banner">
            <h2>Halo Infinite</h2>
            <p>
                <a href="#" class="green-button">
                    Get it Now <span class="material-icons">&#xe5cc;</span>
                </a>
            </p>
            <p>Available now with Xbox Game Pass</p>
            <p>
                <a href="#" class="green-link">
                    JOIN NOW <span class="material-icons">&#xe5cc;</span>
                </a>
            </p>
      </section>
      <section id="videos">
            <h2>BECOME</h2>

            <p class="w-75">
                The legendary Halo series return with the most expansive Master Chief
                campaing yet and a ground-breaking free to play multiplayer
                experience.
            </p>

            <h3>Trailers and Gameplay</h3>

            <div id="slider">
                <div id="controls">
                    <button id="prev"> 
                        <span class="material-icons">&#xe5e0;</span>
                    </button>
                    <button id="next">
                        <span class="material-icons">&#xe5e1;</span>
                    </button>
                </div>
                <div id="current"></div>
                <div id="videos-container"></div>
            </div>
        </section>

        <section id="multi-player">
            <div class="info">
                <h2>LEGENDARY MULTIPLAYER, FREED</h2>
                <p>
                    The next era of Halo begins! To celebrate the 20th Anniversary of 
                    the franchise, Halo Infinite's multiplayer beta is available now and
                    free to play on Xbox and PC. Begin your personal Spartan journey 
                    today whit Season 1, "Heroes Reach", and stay tuned for upcoming, 
                    limited-time in-game events and exclusive rewards. 
                </p>
            </div>
        </section>

        <section id="get-the-game">
            <h2>Get the game.</h2>

            <div class="item-store">
                <div class="left">
                    <img src={foto} alt=""/>
                </div>
                <div class="right">
                    <div class="info-product">
                        <h3>Halo Infinite (Campaign)</h3>
                        <h4>Included with Xbox Game Pass Play Halo</h4>
                        <p>
                            Infinite and over 100 more high-quality games for one low
                            monthly price with Xbox Game Pass.
                        </p>
                        <button class="green-button">JOIN XBOX GAME PASS <span class="material-icons">&#xe5cc;</span></button>
                        <h4>Buy Halo Infinite</h4>
                        <p>$59.99 USD</p>
                        <select name="" id="">
                            <option value="xbox">Xbox</option>
                            <option value="windows">Windows 10 PC</option>
                            <option value="steam">Steam</option>
                        </select>
                        <p>
                            <button class="green-button">BUY NOW <span class="material-icons">&#xe5cc;</span></button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <footer></footer>
    </div>
  );
  
}


export default App;
