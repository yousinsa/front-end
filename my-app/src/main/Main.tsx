import React ,{useState }from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex:number) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
             <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{height:"70vh"}}
          className="d-block w-100"
          src="https://i.pinimg.com/564x/e2/3f/e9/e23fe963678e9c6df6b82187f9b8c615.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"70vh"}}
          className="d-block w-100"
          src="https://i.pinimg.com/564x/cd/18/f7/cd18f70533e6fd3c840ae4ae08570d82.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>

        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
        </div>
    );
};

export default Main;