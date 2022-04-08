import React from 'react'
import './Home.css'
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__bgImg' src='https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg'/>
        <div className='home__row'>
          <Product 
            id = '000001'
            title="The lean startup" 
            price={19.99} 
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
          />
          <Product
            id = '000002'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchon Mixer with K-beater, Dough Hook andWhisk,5 Litre Glass Bowl'
            price={29.99}
            rating={3}
            image='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1573145907-41p3r7dj21L.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id = '000003'
            title="Samsung LC38249 Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://speedcom.vn/wp-content/uploads/2021/03/man-hinh-samsung-27-inch-cong-7.jpg"

          />
          <Product
            id = '000004'
            title="Amazon Echo (3rd generation) } Smart speaker with Alexa, Charoal Fabric"
            price={599.9}
            rating={4}
            image="https://smarthomekit.vn/wp-content/uploads/2019/09/amazon-echo-gen-3rd-1.jpg"
          />
          <Product
            id = '000005'
            title='New Apple iPad pro (12.9-inch, Wifi, 128GB) - Silver (4th Geneation)'
            price={599.99}
            rating={4}
            image='https://phucanhcdn.com/media/product/43316_ipad_pro_11_2021_silver_ha1.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id = '000006'
            title='Samsung LC495730485 49 Curved LED Gaming Monitor - Super Ultra Wide Dual'
            price={1020.99}
            rating={4}
            image='https://images.samsung.com/is/image/samsung/p6pim/vn/lc49g95tssexxv/gallery/vn-curved-c49g95tsse-lc49g95tssexxv-522924569?$720_576_PNG$'
          />
        </div>
      </div>
    </div>
  )
}

export default Home