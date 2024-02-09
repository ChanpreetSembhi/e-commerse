import { RiStarFill } from "@remixicon/react";
import { Feedbacks } from "../store/api";

export default function FeedbackCard(feedback: Feedbacks) {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-5">
      <div className="flex justify-between mb-5">
        <img src={feedback.profile} alt="profile" className="size-12" />
        <div className="flex items-center space-x-1">
          {feedback.stars ? (
            <>
              <RiStarFill
                className={`${
                  feedback.stars >= 1 ? "text-yellow-500" : "text-gray-500"
                } size-5`}
              />
              <RiStarFill
                className={`${
                  feedback.stars >= 2 ? "text-yellow-500" : "text-gray-500"
                } size-5`}
              />
              <RiStarFill
                className={`${
                  feedback.stars >= 3 ? "text-yellow-500" : "text-gray-500"
                } size-5`}
              />
              <RiStarFill
                className={`${
                  feedback.stars >= 4 ? "text-yellow-500" : "text-gray-500"
                } size-5`}
              />
              <RiStarFill
                className={`${
                  feedback.stars >= 5 ? "text-yellow-500" : "text-gray-500"
                } size-5`}
              />
            </>
          ) : (
            <>
              <RiStarFill className="text-gray-500 size-5" />
              <RiStarFill className="text-gray-500 size-5" />
              <RiStarFill className="text-gray-500 size-5" />
              <RiStarFill className="text-gray-500 size-5" />
              <RiStarFill className="text-gray-500 size-5" />
            </>
          )}
        </div>
      </div>
      <div>
        <h5 className="text-xl font-semibold pb-1">{feedback.name}</h5>
        <p className="text-sm text-gray-500">{feedback.msg}</p>
      </div>
    </div>
  );
}
