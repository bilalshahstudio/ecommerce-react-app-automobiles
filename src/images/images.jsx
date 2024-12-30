import LogoImage from "./logo-full.png";
import BannerGirlImage from "./banner-girl.png";

export function Logo({ height, width }) {
  return <img src={LogoImage} alt="logo-image" height={height} width={width} />;
}

export function PageLogo() {
  return (
    <img
      style={{ width: "100%", height: "100%" }}
      src={BannerGirlImage}
      alt="Banner-girl-log"
    />
  );
}
