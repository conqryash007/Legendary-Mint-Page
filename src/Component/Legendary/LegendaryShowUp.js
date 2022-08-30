import React, { useState, useEffect } from "react";
import { Bounce, Slide } from "react-reveal";
import Image from "./images/promo-1.webp";
import Image2 from "./images/promo-2 (1).webp";
import Image3 from "./images/promo-2.webp";

import { data } from "./artifacts/finalMetadata";
import Card from "./Card/Card";
import { toast, ToastContainer } from "react-toastify";
import { CONFIG } from "./../../config";
import Web3 from "web3/dist/web3.min.js";
import { useMoralis } from "react-moralis";
import { SHMMABI } from "./artifacts/SuperheroMooseABI";
import "./Legendary.css";

const LegendaryShowUp = () => {
  const { Moralis, isWeb3Enabled, account, isWeb3EnableLoading } = useMoralis();

  const [imgLoaded, setImgLoaded] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [userTokens, setUserTokens] = useState(null);
  const [copyUser, setCopyUser] = useState(null);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        await Moralis.enableWeb3();
        new Web3(Moralis.provider);

        if (account) {
          const readOptions = {
            contractAddress: CONFIG.smart_contract_superHeroMutantMoose,
            functionName: "balanceOf",
            chain: CONFIG.chainID,
            abi: SHMMABI,
            params: {
              owner: account,
            },
          };
          let message = await Moralis.executeFunction(readOptions);
          const count = parseInt(message._hex, 16);

          // contract call to get user token ids
          const readOptions2 = {
            contractAddress: CONFIG.smart_contract_superHeroMutantMoose,
            functionName: "tokenOfOwnerByIndex",
            chain: CONFIG.chainID,
            abi: SHMMABI,
            params: { owner: account, index: 0 },
          };

          const promises = [];
          for (let i = 0; i < count; i++) {
            readOptions2.params.index = i;
            promises.push(Moralis.executeFunction(readOptions2));
          }

          let res = await Promise.all(promises);
          res = res.map((curr) => {
            return parseInt(curr._hex, 16);
          });
          const userIds = res;
          console.log(userIds);

          const finalArr = [];

          userIds.forEach((curr) => {
            if (curr < 626) {
              finalArr.push({
                tokenId: curr,
                image: `https://ipfs.io/ipfs/QmQ2WgrbMFKLGWqXwnvmvKa1ALT7pwyUVp3M2LNoqCnRSY/${data.collection[curr].image}`,
              });
            }
          });

          setUserTokens(finalArr);
          setCopyUser(finalArr);

          setLoaded(true);
        }
      } catch (err) {
        console.log(err);
        console.log(err);
      }
    };

    run();
  }, [account]);

  // TOASTIFY REALTED FUNCTIONS
  const notifySuccess = (message) =>
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyInfo = (message) =>
    toast.info(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyError = (message) =>
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  // TOASTIFY REALTED FUNCTIONS

  const selectFirst = (tokenId) => {
    const moodalCheck = document.getElementById("my-modal-6");

    copyUser.forEach((curr) => {
      if (curr.tokenId === tokenId) {
        setFirst(curr);
      }
    });

    const newArray = userTokens.filter((curr) => {
      if (curr.tokenId !== tokenId && curr.tokenId !== second?.tokenId)
        return curr;
      else return null;
    });

    setCopyUser(newArray);

    moodalCheck.checked = !moodalCheck.checked;
  };
  const selectSecond = (tokenId) => {
    const moodalCheck = document.getElementById("my-modal-62");

    copyUser.forEach((curr) => {
      if (curr.tokenId === tokenId) {
        setSecond(curr);
      }
    });

    const newArray = userTokens.filter((curr) => {
      if (curr.tokenId !== tokenId && curr.tokenId !== first?.tokenId)
        return curr;
      else return null;
    });

    setCopyUser(newArray);

    moodalCheck.checked = !moodalCheck.checked;
  };

  const mintEpicHeroMoose = async () => {
    if (first?.tokenId && second?.tokenId) {
      let optionMintEpicHeroMoose = {
        abi: SHMMABI,
        functionName: "getLegendaryFromEpic",
        chain: CONFIG.chainID,
        contractAddress: CONFIG.smart_contract_superHeroMutantMoose,
        params: {
          to: account,
          tokenId1: first.tokenId,
          tokenId2: second.tokenId,
        },
      };

      try {
        setDisable(true);
        notifyInfo("Your Transaction has started");

        const mintTransaction = await Moralis.executeFunction(
          optionMintEpicHeroMoose
        );
        console.log(
          "mintTransaction : ",
          mintTransaction,
          "mintTransactionhash : ",
          mintTransaction.hash
        );
        // toastify #1
        notifyInfo("Please wait for confirmation");

        await mintTransaction.wait();

        // toastify #2
        notifySuccess("Your Legendary Moose NFT is minted");
      } catch (err) {
        console.log("mintError=>", err);

        if (
          err?.message?.includes(
            "You are not the owner of tokenId1 or tokenId2"
          )
        ) {
          notifyError("You are not the owner of this tokenId");
        } else if (err?.message?.includes("Token id 1 is not an Epic")) {
          notifyError("Token id 1 is not an Epic");
        } else if (err?.message?.includes("Token id 2 is not an Epic")) {
          notifyError("Token id 2 is not an Epic");
        } else {
          notifyError("There is some error Please Try Again Later");
        }
      }
    } else {
      notifyError("Select 2 Epic Moose to proceed further");
    }
    setDisable(false);
  };

  return (
    <div className="flex justify-center mt-20 mb-20">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        pauseOnHover
      />

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle modal-background-evo">
        <div className="modal-box">
          <h3 className="font-bold text-lg">SELECT YOUR EPIC MOOSE</h3>
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            {copyUser ? (
              copyUser.length > 0 ? (
                <>
                  <div className="container-miniMoose">
                    {copyUser.map((curr, idx) => {
                      return (
                        <div
                          onClick={() => {
                            if (
                              Object.keys(imgLoaded).length ===
                              userTokens.length
                            ) {
                              return selectFirst(curr.tokenId);
                            } else {
                              return null;
                            }
                          }}
                          key={idx}
                        >
                          <Card
                            tokenId={curr.tokenId}
                            image={curr.image}
                            changeLoadImg={setImgLoaded}
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="xxx buttonsmint py-4 container-empty-mini">
                    <h1>Click Here To Mint A Epic Moose</h1>

                    <a
                      style={{ display: "block" }}
                      href="https://epicmint.netlify.app/"
                      className="dashboard px-8 py-2 font-bold text-lg"
                    >
                      Mint-A-Epic-Moose
                    </a>
                  </div>
                </>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-62" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle modal-background-evo">
        <div className="modal-box">
          <h3 className="font-bold text-lg">SELECT YOUR EPIC MOOSE</h3>
          <label
            htmlFor="my-modal-62"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            {copyUser ? (
              copyUser.length > 0 ? (
                <>
                  <div className="container-miniMoose">
                    {copyUser.map((curr, idx) => {
                      return (
                        <div
                          onClick={() => {
                            if (
                              Object.keys(imgLoaded).length ===
                              userTokens.length
                            ) {
                              return selectSecond(curr.tokenId);
                            } else {
                              return null;
                            }
                          }}
                          key={idx}
                        >
                          <Card
                            tokenId={curr.tokenId}
                            image={curr.image}
                            changeLoadImg={setImgLoaded}
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="xxx buttonsmint flex justify-center py-4 container-empty-mini">
                    <h1>Click Here To Mint A Epic Moose</h1>
                    <a
                      href="https://epicmint.netlify.app/"
                      className="dashboard px-8 py-2 font-bold text-lg"
                    >
                      Mint-A-Epic-Moose
                    </a>
                  </div>
                </>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3  gap-x-12 lg:px-20">
        <div>
          <Bounce>
            <div className="moose-Card1 w-full lg:w-80 mt-9">
              <Slide bottom>
                <img
                  alt="hero alpha"
                  src={first?.image || Image3}
                  className="epic-image rounded-lg shadow-2xl moose-image"
                />
              </Slide>
            </div>
            <label
              style={{
                position: "absolute",
                marginTop: "20px",
                cursor: "pointer",
              }}
              htmlFor={"my-modal-6"}
              className="dashboard px-12 py-3 font-semibold mt-5"
            >
              Choose 1st Epic
            </label>
          </Bounce>
        </div>
        <div>
          <Bounce>
            <div className="moose-Card1 w-full lg:w-80 mt-9">
              <Slide bottom>
                <img
                  alt="hero alpha"
                  src={second?.image || Image2}
                  className="epic-image rounded-lg shadow-2xl moose-image"
                />
              </Slide>
            </div>
            <label
              style={{
                position: "absolute",
                marginTop: "20px",
                cursor: "pointer",
              }}
              htmlFor={"my-modal-62"}
              className="dashboard px-12 py-3 font-semibold mt-15"
            >
              Choose 1st Epic
            </label>
          </Bounce>
        </div>
        <div>
          <Bounce>
            <div className="moose-Card1 w-full lg:w-80 mt-9">
              <Slide bottom>
                <img
                  alt="hero alpha"
                  src={Image}
                  className=" epic-image rounded-lg shadow-2xl moose-image"
                />
              </Slide>
            </div>
            <button
              disabled={disable}
              onClick={mintEpicHeroMoose}
              className="dashboard px-12 py-3 font-semibold mt-5"
            >
              Get A Legendary
            </button>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default LegendaryShowUp;
