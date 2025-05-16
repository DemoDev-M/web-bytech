import style from "./style.module.css";
const Section1 = () => {
  return (
    <div className={style.mainSection}>
      <div className={style.mainText}>
        <h2>
          Bytech - Nền tảng chuyển đổi <br /> số toàn diện{" "}
        </h2>
        <p>
          Thành lập vào năm 2018 Công ty Cổ Phần Bytech luôn tiên phong xây dựng
          hệ sinh thái công nghệ IoT & viễn thông, ứng dụng thực tiễn cho chính
          quyền, doanh nghiệp cộng đồng.
        </p>
        <p>
          Chúng tôi mong muốn đóng góp vào hành trình xây dựng một Việt Nam hiện
          đại, kết nối và thông minh - nơi công nghệ phục vụ con người, tối ưu
          vận hành và nâng cao chất lượng đời sống.
        </p>
        <p>
          Với tinh thần trách nhiệm, minh bạch đổi mới, BYTECH cam kết cung cấp
          các giải pháp chất lượng cao, phù hợp với thực tiễn, đồng hành cùng
          khách hàng và đối tác trên chặng đường chuyển đổi số bền vững.
        </p>
      </div>
      <div className={style.ytbMain}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zzoOWh2PLbM?start=13"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Section1;
