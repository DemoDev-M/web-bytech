import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={style.mainBanner}
          src="https://bytech.vn/public/upload/2-min_1.png"
          alt="First slide"
        />
        <Carousel.Caption className={style.leftAlign}>
          <h2>
            Make Your Dreams <br /> Happen
          </h2>
          <p>
            BYTECH không ngừng nỗ lực khẳng định vị trí hàng đầu Việt Nam <br />
            trong lĩnh vực phát triển thiết bị và giải pháp IOT
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.mainBanner}
          src="https://bytech.vn/public/upload/1-min.png"
          alt="Second slide"
        />
        <Carousel.Caption className={style.leftAlign}>
          <h2>
            Make Your Dreams <br /> Happen
          </h2>
          <p>
            BYTECH không ngừng nỗ lực khẳng định vị trí hàng đầu Việt Nam <br />
            trong lĩnh vực phát triển thiết bị và giải pháp IOT
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.mainBanner}
          src="https://bytech.vn/public/upload/gt3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className={style.leftAlign}>
          <h2>
            Make Your Dreams <br /> Happen
          </h2>
          <p>
            BYTECH không ngừng nỗ lực khẳng định vị trí hàng đầu Việt Nam <br />
            trong lĩnh vực phát triển thiết bị và giải pháp IOT
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Banner;
