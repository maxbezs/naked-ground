import logo from './logo.png';
import './App.css';
import React from 'react';
import image1 from './IMG_0065.jpg';
import image2 from './IMG_0068.jpg';
import image3 from './IMG_0848.jpg';
import image34 from './img22.jpg'
function App() {

  const colors = [image1, image2, image3];
const delay = 2500;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <div className="App">
      <div className="div1-announcment">
        <div className="div-announcment">
          <p className="p-announcment">
            <a className='a-announcment' href="">FREE DELIVERY OVER £30 - SHOP NOW</a>
          </p>
        </div>
      </div>
      <header className='header-home'>
        <div className='header-wrapper'>
          <div className='header-left-links'>
            <button className='header-open-navigation' aria-label="Open navigation">
              <span className='header-open-navigation-tablet-and-up'>
                <svg className="Icon Icon--nav" role="presentation" viewBox="0 0 20 14">
                  <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="hidden-phone">
                <svg className="Icon Icon--nav-desktop" role="presentation" viewBox="0 0 24 16">
                  <path d="M0 15.985v-2h24v2H0zm0-9h24v2H0v-2zm0-7h24v2H0v-2z" fill="currentColor"></path>
                </svg>
              </span>
            </button>
            <nav className='header-main-navigation' aria-label="Main navigation">
              <ul className='header-main-navigation-ul'>
                <li className='header-main-navigation-li' >
                  <a className='header-main-navigation-li-a' href="https://www.tripadvisor.com/Restaurant_Review-g642208-d24851249-Reviews-NAKED_GROUND-Santa_Eulalia_del_Rio_Ibiza_Balearic_Islands.html#REVIEWS">
                    Our Houses
                  </a>
                </li>
                <li className='header-main-navigation-li'>
                  <a className='header-main-navigation-li-a' href="tel:+34641773346">
                    Contact us
                  </a>
                </li>
                <li className='header-main-navigation-li'>
                  <a className='header-main-navigation-li-a' href="https://cdn.shopify.com/s/files/1/0598/9367/8286/files/Naked_Ground_A3_Food_Menu_-_English_trim_bleed.pdf?v=1680277399">
                    Menu
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='header-center-links'>
            <h1 className='header-center-links-h1'>
              <a className='header-center-links-h1-a' href="/" >
                <img src={logo} className='header-center-links-h1-a-img' width="140" alt="NAKED GROUND"/>
              </a>
            </h1>
          </div>
          <div className='header-right-links'>
            <nav className='header-right-links-nav'>
              <ul className='header-right-links-nav-ul'>
                <li className='header-main-navigation-li'>
                  <a className='header-main-navigation-li-a' href="https://www.instagram.com/nakedground.es/" target="_blank" rel="noreferrer noopener">
                    @nakedground.es
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='main-div'>
          <section className='main-div-section'>
            <div style={{textAlign: "center"}}>
              <div className="slideshow">
                <div
                  className="slideshowSlider"
                  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                  {colors.map((backgroundColor, index) => (
                    <div
                      className="slide"
                      key={index}>
                        <img className='slider-img' src={backgroundColor}/>
                    </div>
                  ))}
                </div>

                <div className="slideshowDots">
                  {colors.map((_, idx) => (
                    <div
                      key={idx}
                      className={`slideshowDot${index === idx ? " active" : ""}`}
                      onClick={() => {
                        setIndex(idx);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='main-div1'>
          <section className='main-div1-section'>
            <div className='main-div1-section-div'>
              <div className='main-div1-section-div-div'>
                <h2>
                  MORE THAN COFFEE
                </h2>
                <div className='main-div1-section-div-div-p'>
                  <p>
                    "NAKED GROUND is more than coffee; we are a place where you belong. NAKED
GROUND is a daily habit which brings positivity and company to everyone's day"</p>
                </div>
                <a href="#"className='main-div1-section-div-div-a'>
                  SHOP ALL
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className='main-div2'>
          <section  className='main-div2-section'>
            <div className='main-div2-section-div'>
              <div className='main-div2-section-div-div'>
                <div style={{height: "256.984px", display: "flex", justifyContent:"center"}}>
                  <img src={image34} alt=""/>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='main-div3'>
          <section className='main-div3-section'>
            <div className='main-div3-section-div'>
              <header className='main-div3-section-div-header'>
                <h3 className='main-div3-section-div-header-h3'>
                  SHOP NOW
                </h3>
                <h2 className='main-div3-section-div-header-h2'>
                  REFY COLLECTIONS
                </h2>
              </header>
              <div>
                <div className='main-div3-section-div-div'>
                  <div style={{opacity: "1", width: "732px", transform: "translate3d(0px, 0px, 0px)"}}>
                    <div className='main-div3-section-div-div--' style={{padding: "0px", width: "244px"}}>
                      <article>
                        <a className='main-div3-section-div-div--a' style={{paddingBottom: "58%"}} href="#">
                          <img alt="" />
                        </a>
                        <div className='main-div3-section-div-div--div'>
                          <h2 className='main-div3-section-div-div--div-h2'>
                            <a className='main-div3-section-div-div--div-h2-a' href="/refy-brow">
                              BROW COLLECTION
                            </a>
                          </h2>
                          <a href="/refy-brow" ><u></u>
                          </a>
                        </div>
                      </article>
                    </div>
                    <div className='main-div3-section-div-div--' style={{padding: "0px", width: "244px"}}>
                      <article>
                        <a className='main-div3-section-div-div--a' style={{paddingBottom: "58%"}} href="/refy-lips">
                          <img alt="" />
                        </a>
                        <div className='main-div3-section-div-div--div'>
                          <h2 className='main-div3-section-div-div--div-h2'>
                            <a className='main-div3-section-div-div--div-h2-a' href="/refy-lips">LIP COLLECTION</a>
                          </h2>
                          <a href="/refy-lips"><u></u></a>
                        </div>
                      </article>
                    </div>
                    <div className='main-div3-section-div-div--' style={{padding: "0px", width: "244px"}}>
                      <article>
                        <a className='main-div3-section-div-div--a' style={{paddingBottom: "58%"}} href="/summer-skin">
                          <img alt="" />
                        </a>
                        <div className='main-div3-section-div-div--div'>
                          <h2 className='main-div3-section-div-div--div-h2'>
                            <a className='main-div3-section-div-div--div-h2-a' href="/summer-skin" >FACE COLLECTION</a>
                          </h2>
                          <a href="/summer-skin" ><u></u></a>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='main-div4'>
          <section className='main-div4-section'>
            <header className='main-div4-section-header'>
              <div className='main-div4-section-header-div'>
                <div className='main-div4-section-header-div-div'>
                  <button className='main-div4-section-header-div-button'>BROW</button>
                  <button className='main-div4-section-header-div-button'>LIPS</button>
                </div>
              </div>
            </header>
            <div className='main-div4-section-div'>
              <div className='main-div4-section-div-div'>
                <div className='main-div4-section-div-div-div' style={{visibility: "inherit", opacity: "1", transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                  <div style={{height: "335.719px"}}>
                    <div className='main-div4-section-div-div-div-1' style={{position: "absolute", left: "0%"}}>
                      <div>
                        <a href="/eyebrow-tint">
                          <div style={{maxWidth: "1200px", paddingBottom: "133.33333333333334%"}}>
                            <img alt=""/>
                          </div>
                        </a>
                        <div className='main-div4-section-div-div-div-1-div'>
                          <h2 className='main-div4-section-div-div-div-1-div-h2'>
                            <a className='main-div4-section-div-div-div-1-div-h2-a' href="/eyebrow-tint">Brow Tint</a>
                          </h2>
                          <div>
                            <span>£16</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='main-div4-section-div-div-div-1' style={{position: "absolute", left: "25%"}}>
                      <div>
                        <a href="/brow-collection">
                          <div style={{maxWidth: "1200px", paddingBottom: "133.33333333333334%"}}>
                            <img alt=""/>
                          </div>
                        </a>
                        <div className='main-div4-section-div-div-div-1-div'>
                          <h2 className='main-div4-section-div-div-div-1-div-h2'>
                            <a className='main-div4-section-div-div-div-1-div-h2-a' href="/brow-collection">Brow Collection</a>
                          </h2>
                          <div>
                            <span>£40</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='main-div4-section-div-div-div-1' style={{position: "absolute", left: "50%"}}>
                      <div>
                        <a href="/brow-sculpt">
                          <div style={{maxWidth: "1340px", paddingBottom: "133.28358208955225%"}}>
                            <img alt=""/>
                          </div>
                        </a>
                        <div className='main-div4-section-div-div-div-1-div'>
                          <h2 className='main-div4-section-div-div-div-1-div-h2'>
                            <a className='main-div4-section-div-div-div-1-div-h2-a' href="/brow-sculpt">Brow Sculpt</a>
                          </h2>
                          <div>
                            <span>£16</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='main-div4-section-div-div-div-1' style={{position: "absolute", left: "75%"}}>
                      <div>
                        <a href="/refy-brow-tint-pencil">
                          <div style={{maxWidth: "1200px", paddingBottom: "133.33333333333334%"}}>
                            <img alt=""/>
                          </div>
                        </a>
                        <div className='main-div4-section-div-div-div-1-div'>
                          <h2 className='main-div4-section-div-div-div-1-div-h2'>
                            <a className='main-div4-section-div-div-div-1-div-h2-a' href="/refy-brow-tint-pencil">REFY Brow Tint + Brow Pencil</a>
                          </h2>
                          <div>
                            <span>£28</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='main-div4-section-div-div1'>
                <div className='main-div4-section-div-div1-div'>
                  <a className='main-div4-section-div-div1-div-a' href="/refy-brow">SHOP COLLECTION</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className='div-footer'>
        <footer>
          <div className='footer-div'>
            <div className='footer-div-div'>
              <div className='footer-div-div-div1'>
                <h2 className='footer-div-div-div1-h2'>
                  NAKED GROUND
                </h2>
                <p>We are place where you belong.</p>
                <ul className='footer-div-div-div1-ul'>
                  <li className='footer-div-div-div1-ul-li'>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.facebook.com/refy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg' role="presentation" viewBox="0 0 9 17">
                          <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className='footer-div-div-div1-ul-li'>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.instagram.com/nakedground.es/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg'  role="presentation" viewBox="0 0 32 32">
                          <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className='footer-div-div-div1-ul-li'>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.tiktok.com/@nakedground.es" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                      <span>
                        <svg style={{color: "#000", verticalAlign: "middle"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> 
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" fill="black"></path> 
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className='footer-div-div-div1-ul-li'>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.youtube.com/@nakedgroundlive" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg' role="presentation" viewBox="0 0 33 32">
                          <path d="M0 25.693q0 1.997 1.318 3.395t3.209 1.398h24.259q1.891 0 3.209-1.398t1.318-3.395V6.387q0-1.997-1.331-3.435t-3.195-1.438H4.528q-1.864 0-3.195 1.438T.002 6.387v19.306zm12.116-3.488V9.876q0-.186.107-.293.08-.027.133-.027l.133.027 11.61 6.178q.107.107.107.266 0 .107-.107.213l-11.61 6.178q-.053.053-.107.053-.107 0-.16-.053-.107-.107-.107-.213z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer-div-div-div2'>
                <h2 className='footer-div-div-div1-h2'>BROWSE</h2>
                <ul className='footer-div-div-div2-ul'>
                  <li className='footer-div-div-div2-ul-li'>
                    <a className='footer-div-div-div2-ul-li-a' href="https://www.tripadvisor.com/Restaurant_Review-g642208-d24851249-Reviews-NAKED_GROUND-Santa_Eulalia_del_Rio_Ibiza_Balearic_Islands.html#REVIEWS">Our Houses</a>
                  </li>
                  <li className='footer-div-div-div2-ul-li'>
                    <a className='footer-div-div-div2-ul-li-a' href="tel:+34641773346">Contact us</a>
                  </li>
                  <li className='footer-div-div-div2-ul-li'>
                    <a className='footer-div-div-div2-ul-li-a' href="#">Privacy Policy</a>
                  </li>
                  <li className='footer-div-div-div2-ul-li'>
                    <a className='footer-div-div-div2-ul-li-a' href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
              <div className='footer-div-div-div3'>
                <h2 className='footer-div-div-div1-h2'>FREE HOLIDAY TO IBIZA!</h2>
                <p>Enter your email address for a chance to win a free holiday to Ibiza!</p>
                <form method="post" action="/contact#footer-newsletter" acceptCharset="UTF-8">
                  <input className='form-input' type="email" name="contact[email]" aria-label="Enter your email address" 
                  placeholder="Enter your email address" required=""/>
                  <button className='form-button' type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className='footer-buttom'>
              <a className='footer-buttom-a' href="/" >© NAKED GROUND</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
