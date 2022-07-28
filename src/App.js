import { v4 as uuidv4 } from 'uuid';

import applewatch from './assets/apple-watch.svg'
import Naushnik from './assets/Naushnik.svg'
import ipxone11black from './assets/ipxone11black.svg'
import ipxone11blue from './assets/ipxone11subwayBlue.svg'
import mcBookPro from './assets/mcBookPro16.svg'
import ipxone11red from './assets/ipxone11red.svg'
import ipxone11white from './assets/ipxone11White.svg'
import ipxone12Pink from './assets/ipxone12Pink.svg'
import ipxone12Blue from './assets/ipxone12Blue.svg'
import dellxpxKomp from './assets/DellXPS13Komp.svg'
import ipxone13Pro from './assets/ipxone13proSilver.svg'
import ipxone13Grey from './assets/ipxone13Grey.svg'
import SamsungGalaxyNote21 from './assets/SamsungGalaxyNote21.svg'
import SamsungGalaxyS21 from './assets/SamsungGalaxyS21+.svg'
import DellXPS13Komp from './assets/DellXPS13Komp.svg'



function App() {

  const onlineShop = [
    {
      id: uuidv4(),
      image: applewatch,
      NameProduct: "Apple Watch",
      infoProduct: "Series 5 SE",
      sellProduct: 529.99,
    },
    {
      id: uuidv4(),
      image: Naushnik,
      NameProduct: "Sony ZX330BT",
      infoProduct: "Light Grey",
      sellProduct: 39.99,
    },
    {
      id: uuidv4(),
      image: ipxone11black,
      NameProduct: "Iphone 11",
      infoProduct: "Serious Black",
      sellProduct: 619.99,
    },
    {
      id: uuidv4(),
      image: ipxone11blue,
      NameProduct: "Iphone 11",
      infoProduct: "Subway Blue",
      sellProduct: 619.99,
    },
    {
      id: uuidv4(),
      image: mcBookPro,
      NameProduct: "Macbook Pro 16” ",
      infoProduct: "Silver - M1 Pro",
      sellProduct: 3249.99,
    },
    {
      id: uuidv4(),
      image: ipxone11red,
      NameProduct: "Iphone 11 ",
      infoProduct: "Product RED",
      sellProduct: 619.99,
    },
    {
      id: uuidv4(),
      image: ipxone11white,
      NameProduct: "Iphone 11 ",
      infoProduct: "Milky White",
      sellProduct: 619.99,
    },
    {
      id: uuidv4(),
      image: ipxone12Pink,
      NameProduct: "Iphone 12 ",
      infoProduct: "Rose Pink",
      sellProduct: 729.99,
    },
    {
      id: uuidv4(),
      image: ipxone12Blue,
      NameProduct: "Iphone 12 ",
      infoProduct: "Navy Blue",
      sellProduct: 729.99,
    },
    {
      id: uuidv4(),
      image: dellxpxKomp,
      NameProduct: "Dell XPS 15 2-in-1 ",
      infoProduct: "Midnight Gray",
      sellProduct: 3199.99,
    },
    {
      id: uuidv4(),
      image: ipxone13Pro,
      NameProduct: "Iphone 13 Pro ",
      infoProduct: "Silly Silver",
      sellProduct: 1029.99,
    },
    {
      id: uuidv4(),
      image: ipxone13Grey,
      NameProduct: "Iphone 13 Pro ",
      infoProduct: "Grey",
      sellProduct: 1099.99,
    },
    {
      id: uuidv4(),
      image: SamsungGalaxyNote21,
      NameProduct: "Samsung Galaxy Note 21 ",
      infoProduct: "2 - Options",
      sellProduct: 999.99,
    },
    {
      id: uuidv4(),
      image: SamsungGalaxyS21,
      NameProduct: "Samsung Galaxy Note 21 ",
      infoProduct: "Lilac Purple",
      sellProduct: 849.99,
    },
    {
      id: uuidv4(),
      image: DellXPS13Komp,
      NameProduct: "Dell XPS 13 ",
      infoProduct: "White",
      sellProduct: 1799.99,
    },
    {
      id: uuidv4(),
      image: SamsungGalaxyNote21,
      NameProduct: "Samsung Galaxy Note 21 ",
      infoProduct: "2 - Options",
      sellProduct: 999.99,
    },
    {
      id: uuidv4(),
      image: SamsungGalaxyS21,
      NameProduct: "Samsung Galaxy S21+ ",
      infoProduct: "Lilac Purple",
      sellProduct: 849.99,
    },
  ]

  return (
    <div className="App">

      {onlineShop.map((items) => (
        <div>
          <h1>{items.NameProduct}</h1>
          <span>${items.sellProduct}</span>
          <img src={items.image} />
        </div>

      ))}



    </div>
  );
}

export default App;
