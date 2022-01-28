import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
class Slider extends Component {
    render() {
        return (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            className='border-1 '>
            <div className='max-h-60 flex relative  justify-end '>
              <div className='absolute left-20 right-32 top-20 text-left w-1/2'>
                <p className='font-serif text-xl'>01/03</p>
                <pre className=' text-6xl'>
                  <p className='font-serif text-7xl pt-10 font-semibold'>Thinking</p>
                  <p className='font-serif text-7xl font-semibold'>Differently</p>
                </pre>
                
                <h4 className=' font-serif text-2xl mt-5'>Creative Territory</h4>
              </div>
              <div className="image_right_side  w-3/6">
              <Image src="/images/david.png"  width="500px" height="700px"  objectFit="contain"
                className='h-5/6 '
              
               
              />
              </div>
              
            </div>
            <div className=' flex relative  justify-end '>
              <div className='absolute left-20 right-32 top-20 text-left'>
                <p className='font-serif text-xl'>01/03</p>
                <pre className=' text-6xl'>
                  <p className='font-serif text-7xl pt-10 font-semibold'>Thinking</p>
                  <p className='font-serif text-7xl font-semibold'>Differently</p>
                </pre>
                <br />
                <h4 className=' font-serif text-2xl '>Creative Territory</h4>
              </div>
              <div className="image_right_side  w-3/6">
              <Image src="/images/drjpg.png"  width="500px" height="700px"  objectFit="contain"
                className='h-5/6'
              
               
              />
              </div>
              
            </div>
            <div className=' flex relative  justify-end '>
              <div className='absolute left-20 right-32 top-20 text-left'>
                <p className='font-serif text-xl'>01/03</p>
                <pre className=' text-6xl'>
                  <p className='font-serif text-7xl pt-10 font-semibold'>Thinking</p>
                  <p className='font-serif text-7xl font-semibold'>Differently</p>
                </pre>
                <br />
                <h4 className=' font-serif text-2xl '>Creative Territory</h4>
              </div>
              <div className="image_right_side  w-3/6">
              <Image src="/images/drjpg.png"  width="500px" height="700px"  objectFit="contain"
                className='h-5/6'
              
               
              />
              </div>
              
            </div>

            
            <div className='h-full relative flex justify-end'>
              <div className='absolute left-32 top-32 text-left'>
                <h2>02/03</h2>
                <pre className=' text-6xl'>
                  <h1>Thinking</h1>
                  <h1>Differently</h1>
                </pre>
                <br />
                <h4 className='text-2xl'>Creative Territory</h4>
              </div>
              <div className="image_right_side w-3/6">
              <Image src="/images/david.png"  width="500px" height="700px"  objectFit="contain"
                className='h-4/6'
                // src='https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top'
              />
             </div>
            </div>
            <div className='h-full relative flex justify-end'>
              <div className='absolute left-32 top-32 text-left'>
                <h2>03/03</h2>
                <pre className=' text-6xl'>
                  <h1>Thinking</h1>
                  <h1>Differently</h1>
                </pre>
                <br />
                <h4 className='text-2xl'>Creative Territory</h4>
              </div>
              <div className="image_right_side  w-3/6">
              <Image src="/images/head.png" width="500px" height="700px"  objectFit="contain"
                className='h-4/6'
                // src='https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top'
              />
              </div>
            </div>
           
          </Carousel>
        );
    }
}

export default Slider;
