module.exports = {
    mode: "jit",  
    purge: [
        './partials/**/*.hbs', 
        './pages/**/*.hbs',
        './templates/**/*.hbs',
      ],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {
          colors: {
            "custom-color": "#40e0d0",
          },
          lineHeight: {
          },
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
    