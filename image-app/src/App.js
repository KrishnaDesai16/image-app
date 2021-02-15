import logo from './logo.svg';
import riverfront from './images/slideshow/riverfront.jpg'
import sardarpatel from './images/slideshow/sardarpatel.jpg'
import sciencecity from './images/slideshow/sciencecity.jpg'
import AdalajVav2 from './images/slideshow/Adalaj-Vav3.jpg'
import sabarmati from './images/slideshow/SabarmatiAsharam.jpg'
import AdalajVav4 from './images/slideshow/Adalaj-Vav4.jpg'
import jamamasjid from './images/slideshow/Jama-Masjid.jpg'
import Jaali from './images/slideshow/Sidi-Saiyyed-Ni-Jaali.jpg'
import riverfront1 from './images/slideshow/riverfront1.jpg'
import kakriya from './images/slideshow/Kankaria-Lake2.jpg'
import vastrapur from './images/slideshow/vastrapur.jpg'
import sabarmati1 from './images/slideshow/SabarmatiAsharam4.jpg'
import sardarpatel2 from './images/slideshow/statueofunity.jpg'
import sciencecity2 from './images/slideshow/sciencecity2.jpg'
import LawGarden from './images/slideshow/Law-Garden1.jpg'
import manekchowk from './images/slideshow/manekchowk.jpg'
import museum from './images/slideshow/Museum.jpg'
import stadium from './images/slideshow/stadium.jpg'
import kite from './images/slideshow/kitefest.jpg'
import background from './images/slideshow/background.jpg'


import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Button, ListGroup, Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';




function App() {
  return (
    <div className="App"  style={{ backgroundImage: `url(${background})` }}>
      <header class='App-header'>
        <div>
          <Carousel >
            <Carousel.Item interval={1000}>
              <img src={sardarpatel} alt="First slide" className="d-block w-100"
                height="250" width="350px" />
            </Carousel.Item>

            <Carousel.Item interval={500}>

              <img src={riverfront} alt="second slide" className="d-block w-100"
                height="250" width="350px" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img src={sciencecity} alt="Third slide" className="d-block w-100"
                height="250" width="350px" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img src={AdalajVav2} alt="fourth slide" className="d-block w-100"
                height="250" width="350px" />
            </Carousel.Item>
            <Carousel.Item interval={500} >
              <img src={sabarmati} alt="Fifth slide" className="d-block w-100"
                height="250" width="350px" />
            </Carousel.Item>
            <Carousel.Item interval={500} >
              <img src={stadium} alt="sixth slide" className="d-block w-100"
                height="250" width="350px" />
            </Carousel.Item>
            <Carousel.Item >
              <img src={kite} alt="seventh slide" className="d-block w-100"
                height="250" width="350px" />
            </Carousel.Item>



          </Carousel>
        </div>
        <h2>Ahmedabad City</h2>
      </header>
      <section>
        <div class='info'>
          <h4 class='sub-heading'>welcome to Ahmedabad</h4>
          <p>One of the largest city and <b>former capital of Gujarat.</b>
           Ahmedabad is the fastest growing city in the world and the best city to live in India,according to recent reports, 
           which shows the incredibility of the city. Ahmedabad is the financial capital of the most developed state (Gujarat) of India in recent
           times under the leadership of our chief minister Shri Narendra Modi.
           Ahmedabad is also known as<b> Amdavad by fellow Amdavadis</b>. Amdavadis are tagged as the shrewdest 
             businessmen in the world and they have a unique style of their own. Business runs in the blood of
              every average amdavadi.Ahmedabad is now <b><i>flooded with malls,multiplexes, premiere institutes </i></b> and all forms of development.</p>
            <p>Ahmedabad has many <b>Khao galis (Street Food Joints) </b> like Manekchowk, Vastrapur,Ahmedabad has the world’s oldest mall culture ‘Gujari Bazaar’, many beautiful lakes like Kankaria Lake, Vastrapur Lake, Chandlodia talao.

            </p>
            <p><i>Ahmedabad is known for Das Khaman, Karnavati Dabeli, Chetna Gathiya, Jasuben Pizza, Danny’s Coffee Bar, Bobby’s Maskabun, Rambhai’s Kitli, Gujarat Daalwada, Honest Pav Bhaji, Jassi De Parathe, Asharfi kulfi, Cheap Pizza hubs and a thousand more eating joints.</i>

<b>Ahmedabad’s Bus Rapid Transit System (BRTS) </b>is the most successful initiative of its kind in India. Ahmedabad’s <b><i>Motera Stadium</i></b> has witnessed many scintillating thrillers including the famous win by India against Australia in the super eight match of 2011 world cup.</p>
        </div>
       
      </section>
      <section class='photo-gellary'>
        <span><h4 class='sub-heading'> Photo-Gellary</h4></span>
      <Container>
        <Row class='row'>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem',height: '35rem' }}>
              <Card.Img variant="top" src={AdalajVav4} />
              <Card.Body>
                <Card.Title>The Adalaj Stepwell</Card.Title>
           
                <Card.Text>
                <hr></hr>
                <p class='p1'>A deeply beautiful 15th-century stepwell with a tragic story. 
                   Adalaj ni vav (stepwells are called vavs in the Indian state of Gujarat) is a beautiful structure, 
                   descending five stories deep. It win 1499 to hold water, provide refuge to travelers and local people,
                    and offer spiritual sustenance.</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '35rem' }}>
              <Card.Img variant="top" src={Jaali} />
              <Card.Body>
                <Card.Title>Sidi Saiyyed Mosque</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>he Sidi Saiyyed Mosque, located near Khanpur Gate, is another place of worship which is worth checking out, just for its impressive architecture. Built in 1573 by Sidi Saiyyed,
                 a slave of sultan Ahmed Shah, it is famous for its unique carved stone latticework windows.he rear wall is filled with square stone pierced panels in geometrical designs </p>
                  

                </Card.Text>

              </Card.Body>
            </Card>

          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '35rem' }}>
              <Card.Img variant="top" src={jamamasjid} />
              <Card.Body>
                <Card.Title>The Jama Masjid </Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>The Jama Masjid of Ahmedabad was probably the largest mosque in the Indian
                 subcontinent built in this period. Designed as part of a major plan desired by Sultan Ahmed Shah,
                  the mosque is located south of the processional axis that runs from the Maidan-i Shah at the door
                   with three arches, Teen Darwaza. </p>
                  

                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row class='row'>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '35rem' }}>
              <Card.Img variant="top" src={riverfront1} />
              <Card.Body>
                <Card.Title>Sabarmati Riverfront</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>
                    Sabarmati Riverfront is a waterfront being developed along the banks of Sabarmati 
                    river in Ahmedabad, India. Proposed in the 1960s, the construction began in 2005. 
                    Sabarmati river front is early morning and evening time visit place.
                    You can go with your home made food and eatting enjoy at river front.
                    Cycle ride also available.Garden,child playing area and flowers garden </p>

                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '35rem' }}>
              <Card.Img variant="top" src={kakriya} />
              <Card.Body>
                <Card.Title>Kankaria Lake</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>
                Kankaria Lake is the second largest lake in Ahmedabad, Gujarat, India. 
                It is located in the south-eastern part of the city,A lakefront is developed around it, 
                which has many public attractions such as a zoo, toy train, kids city, tethered balloon ride,
                 water rides, water park, food stalls, and entertainment facilities.
                    
                     </p>

                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '35rem' }}>
              <Card.Img variant="top" src={vastrapur} />
              <Card.Body>
                <Card.Title>Vastrapur Lake</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>
                Vastrapur Lake is a popular tourist attraction in Ahmedabad. More of a picnic spot, 
                 The lush, well-kept gardens around the lake make for a quiet getaway from the 
                 humdrum of city life, offering solace right in the middle of the city. 
                 The walking trail around the lake is often abuzz with joggers and city folk,
                  who come here to unwind or start a day. </p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '35rem' }}>
              <Card.Img variant="top" src={sabarmati1} />
              <Card.Body>
                <Card.Title>Sabarmati Ashram</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>
                 This was one of the many residences of Mahatma Gandhi who lived at Sabarmati 
                (Gujarat) and Sevagram (Wardha, Maharashtra) when he was not travelling across India or
                 in prison.He lived in Sabarmati or Wardha for a total of twelve years with his 
                 wife Kasturba Gandhi and followers, including Vinoba Bhave. The Bhagavad Gita
                  was recited here daily as part of the Ashram schedule. </p>
                  
                 </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '35rem' }}>
              <Card.Img variant="top" src={sardarpatel2} />
              <Card.Body>
                <Card.Title>Statue of Unity</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>
                The Statue of Unity is built in dedication to Iron Man Sardar Vallabhbhai Patel, 
                who served as the first home minister of independent India. At 182 metre,
                 the statue is 23 metre taller than China's Spring Temple Buddha statue and 
                 almost double the height of the Statue of Liberty (93 metre tall) in US. </p>
                  

                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '35rem' }}>
              <Card.Img variant="top" src={sciencecity2} />
              <Card.Body>
                <Card.Title>Science City</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>Gujarat Science City is a fun way to get acquainted with the world
                 of science. As a science center, it has something for everyone, 
                 including Hall of Space, Hall of Science, Energy Park, Life Science Park, 
                 Planet Earth, Imax 3D theatre and Musical Fountain. </p>
              


                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row class='row'>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '45rem' }}>
              <Card.Img variant="top" src={LawGarden} />
              <Card.Body>
                <Card.Title>The Law Garden Night Market</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'>The Law Garden Night Market, one of the most popular places to shop
                 in Ahmedabad, is best known for a wide range of colorful goodies and local handicrafts
                  that are sold at highly competitive prices. Jam-packed with stalls selling ethnic
                   garments from Kutch and Saurashtra, glittery trinkets, antique jewelry, traditional
                    wall hangings, and more, this evening bazaar is where you can find the soul and
                     rich art traditions of Gujarat.  </p>
              


                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '45rem'}}>
              <Card.Img variant="top" src={manekchowk} />
              <Card.Body>
                <Card.Title>Manek Chowk</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'> Manek chowk is situated in city area of Ahmedabad.
               At evening time all jewellery shop shut down and a new glorious night is started for which all Ahmedabad is awaited.
               That market is of fast food.This fast food market is famous all over India.Main food for which manek chowk is famous is bhajipav,SouthIndian,Golgappa,Icecream,Gathiya-jalebi
               Food corner is known for khau gali. </p>
                 
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: '20rem', height: '45rem' }}>
              <Card.Img variant="top" src={museum} />
              <Card.Body>
                <Card.Title>Calico Museum of Textiles</Card.Title>
                <Card.Text>
                <hr></hr>
                <p class='p1'> The Calico Museum of Textiles, under the aegis of the Sarabhai Foundation,
                 is India's premier textile museum. Its collection of Indian textiles is 
                 considered by many to be the finest and most comprehensive in the world. 
                 The textiles, alongwith the Sarabhai Foundation's outstanding collection of South Indian
                  bronzes, Vaishnava picchavais, Jain art, and miniature paintings,
                   are housed in The Retreat which is located in the Shahibaug area of Ahmedabad. 
                  The Foundation conducts a daily museum tour of the collections and offers an
                   extensive range of textile and other publications. </p>

                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>



    </div>
  );
}

export default App;
