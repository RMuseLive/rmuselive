import React, { Component } from "react"; 
import Img from 'react-image';

 



class  Img extends Component {
   
    render() { 
       
        const { imageUrl, imageTitle } = this.props;
    
        // load this.props with image paths 
        Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r};
    
        return (
          <header>
            <div className={'image-box'}>
         <Img class="image-square" src={imageUrl} alt={imageTitle} />
            </div>
            <div>{imageTitle}</div>
          </header>
        );
      }
    }



export default Image;
