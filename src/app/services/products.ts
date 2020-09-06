import { CurrencyType } from '~app/utils/currency';

const mock = {
  data: {
    categories: ['tecnologia', 'computacion', 'procesadores'],
    items: [
      {
        id: 1,
        title: 'Intel core i7',
        price: {
          currency: 'ars' as CurrencyType,
          amount: 10000,
          decimals: 0
        },
        picture:
          'https://cdn11.bigcommerce.com/s-6bkt1ygjlf/images/stencil/1280x1280/products/173407/199180/yhst-172536426-9_2519_1818802339__71025.1527500411.jpg?c=2?imbypass=on',
        condition: 'nuevo',
        freeShipping: true
      },
      {
        id: 2,
        title: 'Intel core i8',
        price: {
          currency: 'ars' as CurrencyType,
          amount: 12999,
          decimals: 99
        },
        picture: 'https://i.pcmag.com/imagery/reviews/058gkQyDrEh8T70aCT7SzRu-8..1588697607.jpg',
        condition: 'usado',
        freeShipping: false
      },
      {
        id: 3,
        title: 'Ryzen 5',
        price: {
          currency: 'ars' as CurrencyType,
          amount: 20000,
          decimals: 0
        },
        picture:
          'https://cdn11.bigcommerce.com/s-6bkt1ygjlf/images/stencil/1280x1280/products/173407/199180/yhst-172536426-9_2519_1818802339__71025.1527500411.jpg?c=2?imbypass=on',
        condition: 'nuevo',
        freeShipping: false
      },
      {
        id: 4,
        title: 'Ryzen 7',
        price: {
          currency: 'usd' as CurrencyType,
          amount: 1000,
          decimals: 0
        },
        picture: 'https://i.pcmag.com/imagery/reviews/058gkQyDrEh8T70aCT7SzRu-8..1588697607.jpg',
        condition: 'nuevo',
        freeShipping: true
      }
    ]
  }
};

const productDetailMock = {
  id: 1,
  title: 'Ryzen 7 asjdhasd asdjasdjasjd asjdasjdas dasjdsajdja jsd dsjsd sdajdas dsajdas adsj asdja',
  categories: ['tecnologia', 'computacion', 'procesadores', 'Ryzen', '32GB'],
  price: {
    currency: 'usd' as CurrencyType,
    amount: 17000000,
    decimals: 0
  },
  picture: 'https://i.pcmag.com/imagery/reviews/058gkQyDrEh8T70aCT7SzRu-8..1588697607.jpg',
  condition: 'nuevo',
  freeShipping: true,
  soldQuantity: 10,
  description:
    'asjhdsa hask dhas ajhsd sa akjsd ahjksd ahskjd askjd haj hakjsd kjash kjh jkashk jdhaskjd haskj dsakjhd kjashkjjajskhdkjashd adskhasdkjhas dlalsñk as lkasjdlk aa lkasjdlkj  lkajsdjasd asi klad aslk lkaslh asksa lhkdas lhkd lkasdlh asdl khaslk hlas daksd sdh skd haklsd asoisa lkdsa kllhkds lkhasd aslkh lhksad lkhsad lhksda lkhsahdlkashdklsahdlksa hklas lkdhasdlkasjdh alsjb ash'
};

// TODO: make the integration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProducts = (searchText: string) => mock;

// TODO: make the integration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProduct = (productId: number) => productDetailMock;
