import { RiArrowDownSLine } from "react-icons/ri";
import "./index.css";

export const scrollInto = (className) => () => {
  const el = document.querySelector(className);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default () => {
  return (
    <section className="mid-section">
      <header className="header">
        <h1>
          Rethink your <br />
          living & renting.
        </h1>
        <h3>Make your stay painless with us.</h3>
      </header>
      <div className="form-container">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="main-form bg-translucent"
        >
          <div className="form-input">
            <label htmlFor="city">CITY</label>
            <input type="text" id="city" placeholder="Select your city" />
          </div>
          <div className="form-input">
            <label htmlFor="dates">DATES</label>
            <input type="text" id="dates" placeholder="Select your dates" />
          </div>
          <div className="form-input">
            <label htmlFor="guests">GUESTS</label>
            <input type="text" id="guests" placeholder="Add guests" />
          </div>
          <div className="btn btn-search">
            <button type="submit" className="primary">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5898 25.9395L23.748 20.0977C23.4844 19.834 23.127 19.6875 22.752 19.6875H21.7969C23.4141 17.6191 24.375 15.0176 24.375 12.1875C24.375 5.45508 18.9199 0 12.1875 0C5.45508 0 0 5.45508 0 12.1875C0 18.9199 5.45508 24.375 12.1875 24.375C15.0176 24.375 17.6191 23.4141 19.6875 21.7969V22.752C19.6875 23.127 19.834 23.4844 20.0977 23.748L25.9395 29.5898C26.4902 30.1406 27.3809 30.1406 27.9258 29.5898L29.584 27.9316C30.1348 27.3809 30.1348 26.4902 29.5898 25.9395ZM12.1875 19.6875C8.04492 19.6875 4.6875 16.3359 4.6875 12.1875C4.6875 8.04492 8.03906 4.6875 12.1875 4.6875C16.3301 4.6875 19.6875 8.03906 19.6875 12.1875C19.6875 16.3301 16.3359 19.6875 12.1875 19.6875Z"
                  fill="white"
                />
              </svg>
              Search
            </button>
          </div>
        </form>
        <div className="btn btn-down">
          <button onClick={scrollInto(".explore")}>
            <RiArrowDownSLine />
          </button>
        </div>
        <div className="wave">
          <svg
            width="1000"
            viewBox="0 0 1152 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 19.8721L24 18.8345C48 17.7969 96 15.7217 144 19.8721C192 24.0225 240 34.3985 288 35.4361C336 36.4736 384 28.1729 432 29.2105C480 30.2481 528 40.624 576 43.7368C624 46.8496 672 42.6992 720 35.4361C768 28.1729 816 17.7969 864 10.5337C912 3.27057 960 -0.879817 1008 0.157779C1056 1.19538 1104 7.42095 1128 10.5337L1152 13.6465V51H1128C1104 51 1056 51 1008 51C960 51 912 51 864 51C816 51 768 51 720 51C672 51 624 51 576 51C528 51 480 51 432 51C384 51 336 51 288 51C240 51 192 51 144 51C96 51 48 51 24 51H0V19.8721Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};
