import React from "react";
import ReactStars from "react-rating-stars-component";

const Feedback = ({ feedbackData }) => {
    return (
        <>
            <div>
                <h3 className="text-4xl font-bold text-gray-600 container mx-auto">Feedback:</h3>
            </div>
            <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-3 p-3 my-8">
                {
                    feedbackData.map(feedback => (
                        <div className="card border-2" key={feedback.reviewId}>
                            <div className="flex">
                                <img
                                    className="w-[100px] h-[100px] rounded-full object-cover p-3"
                                    src={feedback.userImg}
                                    alt={feedback.name}
                                />
                                <h2 className="card-title">{feedback.name}</h2>
                            </div>
                            <div className="p-3">
                                <p>{feedback.review}</p>
                                <p>Date: {feedback.date}</p>
                                <div className="flex items-center gap-2">
                                    <ReactStars
                                        count={5}
                                        value={feedback.rating}
                                        size={24}
                                        edit={false}
                                        isHalf={true}
                                        activeColor="#ffd700"
                                    />
                                    <p>{feedback.rating}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Feedback;
