import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card card-compact w-48 bg-base-120 nftCardbg">
      <div className="card-body h-5">
        <p style={{ color: "white", fontSize: "14px", fontWeight: "bolder" }}>
          {props ? "MiniMoose" : null}
        </p>
        <p style={{ color: "magenta", fontSize: "15px", fontWeight: "100" }}>
          {props?.tokenId ? `Token Id : ${props.tokenId}` : null}
        </p>
      </div>
      <figure className="nft-image px-4 pt-10">
        <img
          className="mainImg"
          src={props?.image}
          onLoad={() => {
            if (props?.changeLoadImg) {
              props?.changeLoadImg((prev) => {
                return { ...prev, [props?.tokenId]: true };
              });
            }
          }}
          alt="nft"
        />
      </figure>
    </div>
  );
};

export default Card;
