import { API } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import Context from "../Context/Context";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [review, setReview] = useState();
  const [active, setActive] = useState(0);
  const [description, setDescription] = useState("");
  const UserCtx = useContext(Context).user;
  const UserDataCtx = useContext(Context).userdata;

  useEffect(() => {
    const onLoad = async () => {
      try {
        const data = await API.get("any", "/reviews");
        setReviews(data);
        setReview(data[0]);
      } catch (e) {
        console.log(e);
      }
    };

    onLoad();
  }, []);

  const AddReview = async (event) => {
    event.preventDefault();

    try {
      const data = await API.post("user", "/review", {
        body: {
          name: `${UserDataCtx.userData.firstName} ${UserDataCtx.userData.lastName}`,
          description: description,
        },
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const validateReview = () => {
    return description.length > 10;
  };

  const LeftRender = () => {
    if (active !== 0) {
      const data = active - 1;
      setActive(data);
      setReview(reviews[data]);
    }
  };

  const RightRender = () => {
    if (active !== reviews.length - 1) {
      const data = active + 1;
      setActive(data);
      setReview(reviews[data]);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex items-center bg-Color5 flex-col py-[8rem] min-h-[30rem]">
        <ul className="flex justify-center w-[50%] relative mb-[8rem]">
          {reviews && (
            <li className="w-[80%] max-w-[35rem] h-[20rem] `bg-Color6` shadow-lg p-5 pr-8 relative">
              <p className="absolute right-3 bottom-3 text-[0.8rem] text-Color4">
                By {review.name}
              </p>
              <p>"{review.description} "</p>
            </li>
          )}
          <MdOutlineArrowBackIosNew
            color="#46AF72"
            size="2.5rem"
            className="absolute left-0 top-[44%]"
            onClick={LeftRender}
          />
          <MdArrowForwardIos
            color="#46AF72"
            size="2.5rem"
            className="absolute right-0 top-[44%]"
            onClick={RightRender}
          />
        </ul>
        {UserCtx.isLogged && (
          <form className="flex flex-col">
            <textarea
              placeholder="Write Your Review Here"
              className="p-2 w-[10vw] min-w-[30rem] h-[20vh] min-h-[12rem] bg-[#f0f0f0] shadow-2xl rounded-md"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button
              className="px-2 py-1 rounded-md bg-Color3 text-Color1 ml-2 mt-3 max-w-[5rem] "
              onClick={AddReview}
              disabled={!validateReview()}
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
