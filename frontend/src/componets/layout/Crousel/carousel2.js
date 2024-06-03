import Carousel from 'react-bootstrap/Carousel';
import image1 from "../Header/banner-image.png"
import image2 from "../Header/cart-item1.jpg"
import image3 from "../Header/cart-item2.jpg"
import "./crousel.css"
const CarouSel = () =>{
  return (
    <Carousel fade>
      <Carousel.Item interval={2000} className='crouselItem' >
        <img src={image1} alt='image1' className='img' />
        <Carousel.Caption>
          <h3 className='h3'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000} className='crouselItem' >
      <img src={image2} alt='image2' className='img'/>
        <Carousel.Caption>
          <h3 className='h3'>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className='crouselItem' >
      <img src={image3} alt='image3' className='img'/>
        <Carousel.Caption>
          <h3 className='h3'>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouSel;