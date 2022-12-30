import { v4 as uuidv4 } from "uuid";
import img0 from '../../assets/SliderImages/Home_Intelligent_Business_Solution.jpg';
import img1 from '../../assets/SliderImages/Home_Intelligent_Business_Solution.jpg';
import img2 from '../../assets/SliderImages/Home_One_Stop_Solution.jpg';
import img3 from '../../assets/SliderImages/Home_Leaders_In_Technology.jpg';
import img4 from '../../assets/SliderImages/Home_Certified_To_High_Standards.jpg';
const dataSlider = [
  {
    id: uuidv4(),
    title: "Anchor Ventures Holding",
    subTitle: "Anchor Ventures Holding (AVH) is a private holding company and manages a global portfolio of businesses present across virtually all key sectors. AVH drives prosperity in an uncertain world with its unique mix of industry expertise and digital prowess, powered by a vast global partner network",
    imgSrc: img0,
  },
  {
    id: uuidv4(),
    title: "Intelligence Business Solutions",
    subTitle: "Our leadership in diverse fields enables customized, expert solutions with well rounded support.",
    imgSrc: img1,
  },
  {
    id: uuidv4(),
    title: "One-stop Solutions",
    subTitle: "Partner with AVH for complete, fully integrated solutions and achieve highest impact with less use of resources.",
    imgSrc: img2,
  },
  {
    id: uuidv4(),
    title: "Leaders in Technology",
    subTitle: "AVH drives growth through digital transformation, to accelerate new and scale up existing innovations. ",
    imgSrc: img3,
  },
  {
    id: uuidv4(),
    title: "Certified to Highest Standards",
    subTitle: "Many of our businesses hold top industry and ISO certifications.",
    imgSrc: img4,
  }
];

export default dataSlider;