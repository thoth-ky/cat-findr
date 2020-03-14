# [SHARWIWI](https://sharwiwi.herokuapp.com/)

Sharwiwi is a tinder for Cats. View an endless list of cat images. Favorite the ones you love. Breed information and brief description is provided for most of the cats.
It's powered by [The CAT API](https://thecatapi.com/)

Try it out [here](https://sharwiwi.herokuapp.com/)

# Stack
- React JS
- Docker

# Set Up Without Docker

1. Clone the repo and `cd` into the project directory
  ```bash
    $ git clone https://github.com/thoth-ky/cat-findr.git
  ```

  ```bash
    $ cd cat-findr
  ```

2. Install dependencies

  ```bash
    $ yarn install
  ```

3. Run the app
  ```bash
    $ yarn start
  ```

You can now access it via `localhost:3000`

# Build Docker Image
1. Clone the repo and `cd` into the project directory
  ```bash
    $ git clone https://github.com/thoth-ky/cat-findr.git
  ```

2. Build an image
  ```bash
    $ docker build -t sharwiwi:latest .
  ```

3. Run the Image and expose `PORT 3000`

  ```bash
    $ docker run -p 3000:3000 sharwiwi:latest
  ```
You can now access it via `localhost:3000`

Alternatively, you can pull a stable image: 
  ```bash 
    $ docker pull thothky/sharwiwi:1.0.0
  ```


# Author
- Joseph Mutuku Kyalo