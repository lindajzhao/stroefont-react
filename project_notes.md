
App.js:
- Handling global state
- Handling unidirectional data flow
- Render high level components
- Render full page spinner while awaiting initial data, before mounting any containers

Top level components:
- Stretch - Search box
- ATC Modal

- CONTAINER: PLP (Product grid)
  - ~ CSS Grid/Flexbox
  - Product tile - Image, Name, Price
  - Load More button
  - Spinner while fetching new products
- CONTAINER: PDP component
  - Image
  - Description + all other data
- CONTAINER: Cart
  - List of items renders:
    - cart product cards: 
      - Name, price, quantity
      - Stretch - Change quantity through dropdown
      - Stretch - Remove item from cart
  - Cart Summary
    - Total price (calculation)
  - Checkout button

- LOOK INTO: https://material-ui.com/css-in-js/basics/

Models:
- Product Model:
- Cart: Product ID, quantity, total price

Redux data structure:
- TBD
- What to store

- Mobile first
