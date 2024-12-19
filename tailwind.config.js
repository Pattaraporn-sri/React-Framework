/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      Libre:["Libre Caslon Text","serif"],
      Fira:["Fira Sans","sans-serif"],
      Palanquin:["Palanquin Dark","sans-serif"],
      Varela:["Varela Round","sans-serif"],
      Mitr:["Mitr","sans-serif"]
      
    },
    backgroundImage:{
      air:['url(https://www.financialexpress.com/wp-content/uploads/2023/10/Mumbai-air-pollution.jpg?w=440)'],
      sunset:['url(https://images.pexels.com/photos/1905054/pexels-photo-1905054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'],
      rainfall:['url(https://nivatsky.com/wp-content/uploads/2013/05/beautiful-rain-photography.jpg?w=750)'],
      climate:['url(https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-4.1.0&rect=0%2C292%2C3008%2C1504&q=45&auto=format&w=1356&h=668&fit=crop)'],
      sky:['url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2Zyc2t5X2Nsb3Vkc19zcHJpbmdfY2xvdWRzLWltYWdlLWt5YmNvZTh4LmpwZw.jpg)']
    },
    
  },
  plugins: [],
};
