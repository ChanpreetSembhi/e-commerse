// new arrivals
import arrivalOne from "../assets/new-arrivals/arrival-one.jpg";
import arrivalTwo from "../assets/new-arrivals/arrival-two.jpg";
import arrivalThree from "../assets/new-arrivals/arrival-three.jpg";
import arrivalFour from "../assets/new-arrivals/arrival-four.jpg";

// Men's category
import shirts from "../assets/men-category/shirts.jpg";
import paintedShirts from "../assets/men-category/painted-t-shirt.jpg";
import plainShirt from "../assets/men-category/plain-t-shirt.jpg";
import poloShirt from "../assets/men-category/polo-t-shirt.jpg";
import hoddies from "../assets/men-category/hoodies-s-sweetshirt.jpg";
import jeans from "../assets/men-category/jeans.jpg";
import activeWear from "../assets/men-category/active-wear.jpg";
import boxer from "../assets/men-category/boxers.jpg";

// women's category
import womenHoddies from "../assets/women-category/hoddies.jpg";
import womenCoat from "../assets/women-category/coat.jpg";
import womenTshirt from "../assets/women-category/t-shirt.jpg";
import womenBoxer from "../assets/women-category/boxer.jpg";
import womenJean from "../assets/women-category/jeans.jpg";

// women products
import womenProductOne from '../assets/women-products/product-one.jpg'
import womenProductTwo from '../assets/women-products/product-two.jpg'
import womenProductThree from '../assets/women-products/product-three.jpg'
import womenProductFour from '../assets/women-products/product-four.jpg'
import womenProductFive from '../assets/women-products/product-five.jpg'
import womenProductSix from '../assets/women-products/product-six.jpg'
import womenProductSeven from '../assets/women-products/product-seven.jpg'
import womenProductEight from '../assets/women-products/product-eight.jpg'
import womenProductNine from '../assets/women-products/product-nine.jpg'
import womenProductTen from '../assets/women-products/product-ten.jpg'
import womenProductEleven from '../assets/women-products/product-eleven.jpg'

// feedback profiles
import feedbackProfileOne from "../assets/feedback-profile/profile-1.jpg";
import feedbackProfileTwo from "../assets/feedback-profile/profile-2.jpg";
import feedbackProfileThree from "../assets/feedback-profile/profile-3.jpg";



export type NewArrivals = {
  id: string;
  img: string;
  name: string;
};

export const newArrivals: NewArrivals[] = [
  {
    id: "0",
    img: arrivalOne,
    name: "Knitted Joggers",
  },
  {
    id: "1",
    img: arrivalTwo,
    name: "Full Sleeve",
  },
  {
    id: "2",
    img: arrivalThree,
    name: "Active T-Shirts",
  },
  {
    id: "3",
    img: arrivalFour,
    name: "Urban Shirts",
  },
];

export type Categories = {
  id: string;
  img: string;
  name: string;
};

export const menCategory: Categories[] = [
  {
    id: "0",
    img: shirts,
    name: "Shirts",
  },
  {
    id: "1",
    img: paintedShirts,
    name: "Painted T-Shirts",
  },
  {
    id: "2",
    img: plainShirt,
    name: "Plain T-Shirts",
  },
  {
    id: "3",
    img: poloShirt,
    name: "Polo T-Shirts",
  },
  {
    id: "4",
    img: hoddies,
    name: "Hoodies & Sweetshirt",
  },
  {
    id: "5",
    img: jeans,
    name: "Jeans",
  },
  {
    id: "6",
    img: activeWear,
    name: "Activewear",
  },
  {
    id: "7",
    img: boxer,
    name: "Boxers",
  },
];

export const womenCategory: Categories[] = [
  {
    id: "0",
    img: womenHoddies,
    name: "Hoodies & Sweetshirt",
  },
  {
    id: "1",
    img: womenCoat,
    name: "Coats & Parkas",
  },
  {
    id: "2",
    img: womenTshirt,
    name: "Tees & T-Shirt",
  },
  {
    id: "3",
    img: womenBoxer,
    name: "Boxers",
  },
  {
    id: "4",
    img: womenJean,
    name: "Jeans",
  },
];

export type Feedbacks = {
  id: string;
  profile: string;
  stars?: 1 | 2 | 3 | 4 | 5;
  name: string;
  msg: string;
};

export const feedbacks: Feedbacks[] = [
  {
    id: "0",
    profile: feedbackProfileOne,
    stars: 4,
    name: "Floyd Miles",
    msg: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "1",
    profile: feedbackProfileTwo,
    stars: 2,
    name: "Ronald Richards",
    msg: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "2",
    profile: feedbackProfileThree,
    stars: 5,
    name: "Savannah Nguyen",
    msg: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export type Product = {
  id: string;
  img: string;
  name: string;
  brand: string;
  price: number;
};

export const womenProducts: Product[] = [
  {
    id: "0",
    img: womenProductOne,
    name: "Black Sweatshirt with",
    brand: "Jhanvi’s  Brand",
    price: 123,
  },
  {
    id: "1",
    img: womenProductTwo,
    name: "line Pattern Black H...",
    brand: "AS’s  Brand",
    price: 25,
  },
  {
    id: "2",
    img: womenProductThree,
    name: "Black Shorts",
    brand: "MM’s  Brand",
    price: 37,
  },
  {
    id: "3",
    img: womenProductFour,
    name: "Leaves Pattern White",
    brand: "paypal’s  Brand",
    price: 58,
  },
  {
    id: "4",
    img: womenProductFive,
    name: "Levender Hoodie with",
    brand: "Nike’s  Brand",
    price: 199,
  },
];

export const womenPageProducts: Product[] = [
  {
    id: "0",
    img: womenProductOne,
    name: "Black Sweatshirt with",
    brand: "Jhanvi’s  Brand",
    price: 123,
  },
  {
    id: "1",
    img: womenProductTwo,
    name: "Black Shorts",
    brand: "MM’s  Brand",
    price: 37,
  },
  {
    id: "2",
    img: womenProductThree,
    name: "Levender Hoodie with ....",
    brand: "Nike’s  Brand",
    price: 119,
  },
  {
    id: "3",
    img: womenProductFour,
    name: "Black Sweatshirt with ....",
    brand: "Jhanvi’s  Brand",
    price: 128,
  },
  {
    id: "4",
    img: womenProductFive,
    name: "Leaves Pattern White...",
    brand: "paypal’s  Brand",
    price: 79,
  },
  {
    id: "5",
    img: womenProductSix,
    name: "Yellow Sweatshirt",
    brand: "woden’s  Brand",
    price: 29,
  },
  {
    id: "6",
    img: womenProductSeven,
    name: "Barboreal Gray Sweats...",
    brand: "Priya’s  Brand",
    price: 77,
  },
  {
    id: "7",
    img: womenProductEight,
    name: "I Don’t Graphic T-shirt",
    brand: "Nisargi’s  Brand",
    price: 89,
  },
  {
    id: "8",
    img: womenProductNine,
    name: "Blue Flower Print Crop ....",
    brand: "Mellon’s  Brand",
    price: 67,
  },
  {
    id: "9",
    img: womenProductTen,
    name: "White T-shirt",
    brand: "Helen’s  Brand",
    price: 19,
  },
];
