

const TOTAL_PAGES = 5;

export const products = [
  { price: '99,99',name: 'Caneca de cerâmica rústica', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg', category: 'mugs' },
  { price: '99,99',name: 'Camiseta not today.', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg', category: 't-shirts' },
  { price: '99,99',name: 'Caneca Black Ring', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg', category: 'mugs' },
  { price: '99,99',name: 'Camiseta Broken Saints', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg', category: 't-shirts' },
  { price: '99,99',name: 'Camiseta Outcast', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg', category: 't-shirts' },
  { price: '99,99',name: 'Caneca The Grounds', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg', category: 'mugs' },
  { price: '99,99',name: 'Camiseta evening', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg', category: 't-shirts' },
  { price: '99,99',name: 'Caneca preto fosco', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg', category: 'mugs' },
  { price: '99,99',name: 'Caneca Never settle', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg', category: 'mugs' },
  { price: '99,99',name: 'Camiseta DREAMER', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg', category: 't-shirts' },
  { price: '99,99',name: 'Caneca Decaf! P&Co', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg', category: 'mugs' },
  { price: '99,99',name: 'Camiseta Ramones', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae!', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg', category: 't-shirts' },
]

// const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
//   const products = baseProducts.map(product => ({
//     ...product, 
//     id: faker.datatype.uuid(),
//     price_in_cents: faker.datatype.number({
//       min: 2000,
//       max: 10000,
//     }),
//     sales: faker.datatype.number(40),
//     created_at: faker.date.past()
//   })).sort(() => .5 - Math.random());

//   return [...acc, ...products]
// }, [])

// export default allProducts