import { HistorySearch, ProductDto, ProfileDto } from "../constants/dto";

const ProductListData: ProductDto[] = [
  {
    id: "product_1",
    name: "Nước rửa chén hương cam quế",
    imageURL:
      "http://sofiagroup.com.vn/wp-content/uploads/2023/08/z4573279264751_f19071b770ca63357e223b29108c366b-450x450.jpg",
    color: "brown",
    description: "Nước rửa chén hương cam quế",
    price: 55,
    isFavorite: true,
    timeSearch: "nuoc rua chen huong cam que",
    statusType: 0,
    tag: "",
  },
  {
    id: "product_2",
    name: "Nước rửa chén hương hoa cúc họa mi",
    color: "brown",
    imageURL:
      "http://sofiagroup.com.vn/wp-content/uploads/2023/08/z4573279259385_edd585934f44c0f7f2643988a2c99902-450x450.jpg",
    description: "Nước rửa chén hương hoa cúc họa mi",
    price: 72,
    isFavorite: false,
    timeSearch: "nuoc rua chen huong hoa cuc hoa mi",
    statusType: 1,
    tag: "Latest",
  },
  {
    id: "product_3",
    name: "Nước rửa chén hương cam sả",
    color: "brown",
    imageURL:
      "http://sofiagroup.com.vn/wp-content/uploads/2023/08/z4573279277980_2cd948c979f97e684d200b10dba66073.jpg",
    description: "Nước rửa chén hương cam sả",
    price: 60,
    isFavorite: true,
    timeSearch: "nuoc rua chen huong cam sa",
    statusType: 2,
    tag: "Cheapest",
  },
  {
    id: "product_4",
    name: "Áo sơ mi tay ngắn",
    color: "brown",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-tay-ngan-j-p-s-48-0022175/2ffcc0b6-8f77-4e02-87c4-001a6569adb0.jpg?w=540&h=756&c=true&ntf=false",
    description: "siêu thấm hút",
    price: 59,
    isFavorite: true,
    timeSearch: "23k search today",
    statusType: -1,
    tag: "Most Popular",
  },
  {
    id: "product_5",
    name: "Áo Sơ Mi Cổ Lãnh Tụ",
    color: "brown",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-co-lanh-tu-speed-36-0022372/fc5e2e0f-645a-b901-722b-001a8677fb9b.jpg?w=540&h=756",
    description: "siêu thấm hút",
    price: 12,
    isFavorite: false,
    timeSearch: "22k search today",
    statusType: -1,
    tag: "Most Popular",
  },

  {
    id: "product_6",
    name: "Áo Sơ Mi Vải Cotton Phối Túi",
    color: "brown",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-tay-ngan-speed-29-0022365/e1d2b845-e316-a900-52d1-001a8afb0bbb.jpg?w=540&h=756&c=true&ntf=false",
    description: "siêu thấm hút",
    price: 12,
    isFavorite: false,
    timeSearch: "22k search today",
    statusType: -1,
    tag: "Most Popular",
  },
  {
    id: "product_7",
    name: "Áo Sơ Caro Cosmo",
    color: "brown",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-tay-ngan-y1-m15-0022177/48aea3ee-b58e-0e00-b609-001a6e03818f.jpg?w=540&h=756&c=true&ntf=false",
    description: "siêu thấm hút",
    price: 12,
    isFavorite: false,
    timeSearch: "22k search today",
    statusType: -1,
    tag: "Most Popular",
  },
  {
    id: "product_8",
    name: "Áo Sơ Mi ngắn tay",
    color: "brown",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-tay-ngan-y1-m15-0022177/48aea3ee-b58e-0e00-b609-001a6e03818f.jpg?w=540&h=756&c=true&ntf=false",
    description: "siêu thấm hút",
    price: 12,
    isFavorite: false,
    timeSearch: "22k search today",
    statusType: -1,
    tag: "Most Popular",
  },
  {
    id: "product_9",
    name: "Áo Sơ Mi ngắn tay",
    color: "brown",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-cuban-the-days-eye-10-0022051/83bdc15d-0593-d601-4ed3-001a4457d4ba.jpg?w=540&h=756&c=true&ntf=false",
    description: "siêu thấm hút",
    price: 12,
    isFavorite: false,
    timeSearch: "22k search today",
    statusType: -1,
    tag: "Most Popular",
  },
  {
    id: "product_10",
    name: "Áo Sơ Mi dáng SPEED",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-tay-ngan-speed-40-0022388/c6d516ef-0f60-0200-7cff-001a8636e37c.jpg?w=540&h=756&c=true&ntf=false",
    color: "brown",
    description: "Siêu thấm hút",
    price: 55,
    isFavorite: true,
    timeSearch: "2.3k search today",
    statusType: 0,
    tag: "",
  },

  {
    id: "product_11",
    name: "Áo sơ mi dài tay",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-tay-dai-soi-modal-toi-gian-m25-0021950/26f15c31-49cd-cb00-360d-001a2d7bf9b8.jpg?w=540&h=756&c=true&ntf=false",
    color: "xanh đậm",
    description: "Thích hợp cho mùa đông",
    price: 79,
    isFavorite: false,
    timeSearch: "1.5k search today",
    statusType: 1,
    tag: "Mới",
  },

  {
    id: "product_12",
    name: "sơ mi dài tay",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-tay-dai-soi-modal-toi-gian-m25-0021950/26f15c31-49cd-cb00-360d-001a2d7bf9b8.jpg?w=540&h=756&c=true&ntf=false",
    color: "trắng",
    description: "Phong cách thanh lịch",
    price: 65,
    isFavorite: true,
    timeSearch: "3.7k search today",
    statusType: 0,
    tag: "",
  },
  {
    id: "product_13",
    name: "Áo Sơ Mi Cuban",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-so-mi-cuban-the-days-eye-27-0022081/329a0896-4c24-0200-c95b-001a4f32cdfd.jpg?w=540&h=756",
    color: "xanh jean",
    description: "Dáng ôm vừa",
    price: 45,
    isFavorite: false,
    timeSearch: "1.2k search today",
    statusType: 0,
    tag: "",
  },
  {
    id: "product_14",
    name: "Áo Thun Vải",
    imageURL:
      "https://cdn2.yame.vn/pimg/ao-thun-co-tron-12vahdt-long-van-thien-o-ver5-0021828/aca2b416-a3f9-0400-04bf-001a1e915714.jpg?w=540&h=756&c=true",
    color: "đen",
    description: "Bền và phù hợp mọi hoàn cảnh",
    price: 30,
    isFavorite: true,
    timeSearch: "2.1k search today",
    statusType: 0,
    tag: "",
  },
  {
    id: "product_15",
    name: "Áo Sơ Mi Cuban ",
    imageURL:
      "https://cdn2.yame.vn/pimg/so-mi-co-danton-12vahdt-long-van-thien-o-ver1-0021485/a04aaf49-5bb8-0f00-e814-0019aa3a8b7f.jpg?w=540&h=756",
    color: "hồng pastel",
    description: "Thời trang và ấm áp",
    price: 69,
    isFavorite: true,
    timeSearch: "2.8k search today",
    statusType: 0,
    tag: "",
  },
];

const ProfileData: ProfileDto = {
  urlImage: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
  name: "Tom",
  subName: "Let's go shopping",
};

const HomeSwiperData = [
  "http://sofiagroup.com.vn/wp-content/uploads/2019/12/bn1.jpg",
  "http://sofiagroup.com.vn/wp-content/uploads/2019/12/sofia-vi%E1%BB%87t-nam-1-scaled.png",
  "http://sofiagroup.com.vn/wp-content/uploads/2019/12/sofia-vi%E1%BB%87t-nam.png",
];

const HistorySearchList: HistorySearch[] = [
  { id: 0, label: "Electronics" },
  { id: 1, label: "Pants" },
  { id: 2, label: "Three Second" },
  { id: 3, label: "Long Shirt" },
];

export { ProductListData, ProfileData, HomeSwiperData, HistorySearchList };
