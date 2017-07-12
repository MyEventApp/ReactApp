import React from 'react';
import {Link} from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import backbutton from '../images/back-button.png';
import Img1 from '../images/eventt-image1.png';
import Img2 from '../images/eventt-image2.png';
import Img3 from '../images/eventt-image3.png';
import Img4 from '../images/eventt-image4.png';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: '5px',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: Img1,
    title: 'Image1',
  },
  {
    img: Img2,
    title: 'Image2',
  },
  {
    img: Img3,
    title: 'Image3',
  },
  {
    img: Img4,
    title: 'Image4',
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Gallery = () => (
  <div className='col-xs-12 section'>
  <div className='row'>
  <div className='col-xs-2'>
  <Link to='/details'>
  <p><img src={backbutton} style={{width:'70%',marginTop:"5px"}}/></p>
  </Link>
  </div>
  <div className='col-xs-8'>
  <center><h4><b>Gallery</b></h4></center>
  </div>
  </div>
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
        {tilesData.map((tile) => (
        <GridTile
          key={tile.index}
          title={tile.title}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
  </div>
);

export default Gallery;
