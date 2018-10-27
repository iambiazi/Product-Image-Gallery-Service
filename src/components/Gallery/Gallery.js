import React from 'react';
// import './Gallery.css';
import { Carousel } from 'react-bootstrap';

const galleryStyle = {
  display: 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap'
};

export default class Gallery extends React.Component {
  constructor() {
    super()
    this.state = {
      images: [
        {id: 1, url: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg" },
        {id: 2, url: "https://s3.amazonaws.com/uifaces/faces/twitter/danvernon/128.jpg" },
        {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
        {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
        {id: 5, url: "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg" },
        {id: 6, url: "https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg" },
        {id: 1, url: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg" },
        {id: 2, url: "https://s3.amazonaws.com/uifaces/faces/twitter/danvernon/128.jpg" },
        {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
        {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
        {id: 5, url: "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg" },
        {id: 6, url: "https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg" },
        {id: 1, url: "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg" },
        {id: 2, url: "https://s3.amazonaws.com/uifaces/faces/twitter/danvernon/128.jpg" },
        {id: 3, url: "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg" },
        {id: 4, url: "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg" },
        {id: 5, url: "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg" },
        {id: 6, url: "https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg" },
      ]
    }
  };
  
  render() {
    const gallery = this.state.images;
    return (
      <Carousel 
        interval={null}
        indicators={false}	
        >
        <Carousel.Item>
          <table>
              <tr>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
              </tr>
            </table>
            <table>
              <tr>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg"/></td>
              </tr>
            </table>
        </Carousel.Item>
        
        <Carousel.Item>
            <table>
              <tr>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
              </tr>
            </table>
            <table>
              <tr>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
                <td><img style ={{'padding':'1px'}} width={250} height={250} alt="house" src="https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"/></td>
              </tr>
            </table>
        </Carousel.Item>  
      </Carousel>

    )
  }
};

// render() {
//   const gallery = this.state.images;
//   return(
    
//       <div style={galleryStyle}>
//         {gallery.map(img => 
//           <div> 
//             <img style={{width: 250, height: 250}} src={img.url}/>
//             <img style={{width: 250, height: 250}} src={img.url}/>
//           </div>
//         )}
//       </div>
    
    
//   )
// }