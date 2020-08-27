const fakeCourse = [
  {
    name: "Cooking Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    // img:
    //   "https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    img:
      "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Physics Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Chemistry Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Gardening Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/5808/food-healthy-vegetables-village.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Astronomy Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/1275413/pexels-photo-1275413.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Car Racing Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/2691479/pexels-photo-2691479.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Surfing Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/7862/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Beach Touring Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/1756086/pexels-photo-1756086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Soccer Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Thunder Safety Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Color Sensing Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Shadow Creation Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Street Photography Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Balloon Travelling Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Circus Course",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, amet earum omnis consequatur distinctio hic ratione animi iusto quis cum.",
    price: 100,
    img:
      "https://images.pexels.com/photos/2337777/pexels-photo-2337777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

//export default fakeCourse;

export default (n = 15) =>
  Promise.resolve(fakeCourse.sort(() => 0.5 - Math.random()).slice(0, n));
