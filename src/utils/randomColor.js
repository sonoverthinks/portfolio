const colors = ["#08D9D6", "#FF2E63", "#252A34", "#EAEAEA"];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColor;
