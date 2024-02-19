import weatherLogo from "./../../assets/logo.svg";
export default function Logo() {
  return (
    <>
      <a href="/">
        <img className="h-9" src={weatherLogo} alt="Weather App" />
      </a>
    </>
  );
}
