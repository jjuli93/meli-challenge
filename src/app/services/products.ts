const mock = {
  data: {
    categories: ['tecnologia', 'computacion', 'procesadores'],
    items: [
      {
        id: 1,
        title: 'Intel core i7',
        price: {
          currency: 'ars',
          amount: 10000,
          decimals: 0
        },
        picture:
          'https://cdn11.bigcommerce.com/s-6bkt1ygjlf/images/stencil/1280x1280/products/173407/199180/yhst-172536426-9_2519_1818802339__71025.1527500411.jpg?c=2?imbypass=on',
        condition: true,
        freeShipping: true
      },
      {
        id: 1,
        title: 'Intel core i8',
        price: {
          currency: 'ars',
          amount: 12999,
          decimals: 99
        },
        picture:
          'https://cdn11.bigcommerce.com/s-6bkt1ygjlf/images/stencil/1280x1280/products/173407/199180/yhst-172536426-9_2519_1818802339__71025.1527500411.jpg?c=2?imbypass=on',
        condition: true,
        freeShipping: true
      },
      {
        id: 1,
        title: 'Ryzen 5',
        price: {
          currency: 'ars',
          amount: 20000,
          decimals: 0
        },
        picture:
          'https://cdn11.bigcommerce.com/s-6bkt1ygjlf/images/stencil/1280x1280/products/173407/199180/yhst-172536426-9_2519_1818802339__71025.1527500411.jpg?c=2?imbypass=on',
        condition: true,
        freeShipping: true
      },
      {
        id: 1,
        title: 'Ryzen 7',
        price: {
          currency: 'us',
          amount: 1000,
          decimals: 0
        },
        picture:
          'https://cdn11.bigcommerce.com/s-6bkt1ygjlf/images/stencil/1280x1280/products/173407/199180/yhst-172536426-9_2519_1818802339__71025.1527500411.jpg?c=2?imbypass=on',
        condition: true,
        freeShipping: true
      }
    ]
  }
};

// TODO: make the integration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProducts = (searchText: string) => mock;
