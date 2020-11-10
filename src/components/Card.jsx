import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="cardContainer">
        <img
          className="image"
          alt=""
          src="https://www.constructeur-maison-laure.fr/sites/default/files/2019-06/maison-toiture-plate-2-maison-laure.jpg"
        ></img>
        <div className="buttonContainer">
          <button className="buttonTextLeft darkButton">
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7857 5.5L1.7857 5.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.28571 9.875L1.7857 5.5L6.28571 1.125"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="buttonTextRight darkButton">
            {" "}
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.21427 5.5H10.2143"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.71427 1.125L10.2143 5.5L5.71427 9.875"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="spanContainer">
          <span className="imageText">Bien situé</span>
          <span className="imageText">Grande terasse</span>
        </div>
      </div>
      <div className="cardBottom">
        <div className="bottomInformation">
          <div className="leftArea">
            <div className="priceContainer">
              <h1 className="price">290 000</h1>
              <h1 className="price greyPrice">€</h1>
            </div>
            <span className="cardSpan"> Apt · T2 · 40 m2 · Paris 19 </span>
          </div>

          <button className=" rightButton">
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2914 2.84172C17.8536 2.41589 17.3338 2.0781 16.7617 1.84763C16.1896 1.61716 15.5764 1.49854 14.9571 1.49854C14.3379 1.49854 13.7247 1.61716 13.1525 1.84763C12.5804 2.0781 12.0606 2.41589 11.6229 2.84172L10.7143 3.72506L9.80571 2.84172C8.9214 1.98198 7.72203 1.49898 6.47143 1.49898C5.22083 1.49898 4.02145 1.98198 3.13714 2.84172C2.25283 3.70147 1.75603 4.86753 1.75603 6.08339C1.75603 7.29925 2.25283 8.46531 3.13714 9.32506L4.04571 10.2084L10.7143 16.6917L17.3829 10.2084L18.2914 9.32506C18.7294 8.89943 19.0769 8.39407 19.3139 7.83785C19.551 7.28164 19.673 6.68546 19.673 6.08339C19.673 5.48132 19.551 4.88514 19.3139 4.32893C19.0769 3.77271 18.7294 3.26735 18.2914 2.84172V2.84172Z"
                stroke="#7C8C9F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
