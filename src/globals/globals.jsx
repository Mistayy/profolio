
export const appTitle = 'Wizlen';
export const simpleSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    appendDots: dots => {
      return <ul style={{ margin: '0px',padding:'0px' }}>{dots}</ul>;
    },
    customPaging: i => (
      <div
        style={{
          width: "30px",
          height:"30px",
          color:"transparent",
          border: "3px white solid",
          borderRadius:"50%",
          backgroundImage: "url('/src/images/pattern.png')",
          backgroundSize: "cover"
        }}
      >
        {i + 1}
      </div>
    )


};