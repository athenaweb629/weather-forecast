export default (props) => {
  const { temp } = props;

  const colorList = [
    { temp: 45, from: "rgb(250, 7, 7)", to: "rgb(250, 96, 7)" },
    { temp: 40, from: "rgb(250, 96, 7)", to: "rgb(250, 165, 7)" },
    { temp: 35, from: "rgb(250, 165, 7)", to: "rgb(250, 230, 7)" },
    { temp: 30, from: "rgb(250, 230, 7)", to: "rgb(197, 250, 7)" },
    { temp: 25, from: "rgb(197, 250, 7)", to: "rgb(52, 250, 7)" },
    { temp: 20, from: "rgb(52, 250, 7)", to: "rgb(7, 250, 108)" },
    { temp: 15, from: "rgb(7, 250, 108)", to: "rgb(7, 242, 250)" },
    { temp: 10, from: "rgb(7, 242, 250)", to: "rgb(7, 201, 240)" },
    { temp: 5, from: "rgb(7, 201, 240)", to: "rgb(7, 170, 250)" },
    { temp: 0, from: "rgb(7, 193, 250)", to: "rgb(7, 120, 250)" },
    { temp: -10, from: "rgb(7, 120, 250)", to: "rgb(7, 84, 250)" },
    { temp: -15, from: "rgb(7, 84, 250)", to: "rgb(7, 47, 250)" },
    { temp: -20, from: "rgb(7, 47, 250)", to: "rgb(7, 11, 250)" },
    { temp: -25, from: "rgb(7, 11, 250)", to: "rgb(15, 7, 250)" },
    { temp: -30, from: "rgb(15, 7, 250)", to: "rgb(0, 157, 255)" },
  ];

  const tempMatch = colorList.filter((color) => {
    var t = temp - 273.15;
    if (t > 45) {
      t = 45;
    } else if (t < -30) {
      t = -30;
    }
    if (Math.abs(color.temp - t) < 5) {
      return color;
    }
    return;
  })[0];
  return (
    <p
      style={{
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        margin: "0",
        background: `-webkit-linear-gradient(-45deg, ${tempMatch.from}, ${tempMatch.to} 100%)`,
      }}
    >
      {parseInt(((temp - 273.15) * 9) / 5 + 32) + "\u00B0F"}
    </p>
  );
};
