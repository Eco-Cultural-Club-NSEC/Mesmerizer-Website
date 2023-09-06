
import './logoslider.css';

const logos = [
  {
    amazon:
      "https://e7.pngegg.com/pngimages/928/468/png-clipart-canada-amazon-com-california-amazon-drive-amazon-prime-adidas-logo-s-text-service.png"
  },
  {
    facebook:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"
  },
  {
    google:
      "https://w7.pngwing.com/pngs/607/104/png-transparent-googleplex-google-logo-google-search-oliver-atom-text-logo-business.png"
  },
  { tesla: "https://assets.stickpng.com/images/62cc22ba150d5de9a3dad602.png" },
  {
    mba:
      "https://www.mbachaiwala.com/wp-content/uploads/2023/03/mba-chai-wala-logo.png"
  }
];

function Logoslider() {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={logos[0].amazon} alt="" />
        <img src={logos[1].facebook} alt="" />
        <img src={logos[2].google} alt="" />
        <img src={logos[3].tesla} alt="" />
        <img src={logos[4].mba} alt="" />
        <img src={logos[4].mba} alt="" />
        <img src={logos[4].mba} alt="" />
      </div>
      <div className="logos-slide">
        <img src={logos[0].amazon} alt="" />
        <img src={logos[1].facebook} alt="" />
        <img src={logos[2].google} alt="" />
        <img src={logos[3].tesla} alt="" />
        <img src={logos[4].mba} alt="" />
        <img src={logos[4].mba} alt="" />
        <img src={logos[4].mba} alt="" />
      </div>
    </div>
  );
}
export default Logoslider;
