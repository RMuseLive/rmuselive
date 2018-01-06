import React from 'react';
import Gallery from 'react-multimedia-gallery';
import Img from 'react-image';
import { Measure } from 'react-measure';

export default class Gallery extends React.Component {
    render() {
    return (
        <Gallery items={ITEMS_SET} onClickItem={this.openLightbox} />
    );
    }
}
 
const PHOTO_SET = [
    {
        src: '/stillife.jpg',
        srcset: [
          '/stillife.jpg 1024w',
          '/stillife.jpg 800w',
          '/stillife.jpg 500w',
          '/stillife.jpg 320w',
        ],
        sizes:[
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw'
        ],
        width: 250,
        height: auto,
        alt: 'Stillive',
        type: 'photo',
      }, {
        src: '/stillife.jpg',
        srcset: [
          '/stillife.jpg 1024w',
          '/stillife.jpg 800w',
          '/stillife.jpg 500w',
          '/stillife.jpg 320w',
        ],
        sizes:[
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw'
        ],
        width: 250,
        height: auto,
        alt: 'Stillife',
        type: 'photo',
      } 
];
 

function ResponsiveGallery (props) {
  const { maxImageWidth = 300 } = props;
  return (
    <Measure whitelist={['width']}>
      {({ width }) => (
        <Gallery cols={Math.ceil(width / maxImageWidth)}>....</Gallery>
      )}
    </Measure>
  );
}

const ITEMS_SET = PHOTO_SET.concat(PHOTO_SET.concat(ARTICLE_SET));