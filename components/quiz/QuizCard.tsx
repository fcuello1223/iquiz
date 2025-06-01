"use client";
import { useGlobalContext } from "@/context/globalContext";
import { IQuiz } from "@/types/types";
import { dots } from "@/utils/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  quiz: IQuiz;
}

function QuizCard({ quiz }: Props) {
  const router = useRouter();

  const { setSelectedQuiz } = useGlobalContext();

  const handleClick = () => {
    setSelectedQuiz(quiz);
    router.push(`/quiz/setup/${quiz.id}`);
  };

  return (
    <div
      className="cursor-pointer border-2 rounded-xl p-1 shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300 ease-in-out"
      onClick={handleClick}
    >
      <div className="px-6 py-4 flex flex-col gap-4">
        <div className="flex items-center justify-center w-full h-64 overflow-hidden">
          <Image
            src={
              quiz.image
                ? quiz.image
                : `/categories/image--${quiz.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}.png`
            }
            width={260}
            height={200}
            alt="quiz image"
            className="h-full rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{quiz.title}</h2>
          <p className="text-gray-600 leading-none font-semibold">
            {quiz.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 font-semibold text-sm flex items-center gap-2">
            <span className="text-xl">{dots}</span>
            <span>
              Total Questions:{" "}
              <span className="font-bold text-gray-600">
                {quiz.questions.length}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;

// "use client";
// import { IQuiz } from "@/types/types";
// import { dots } from "@/utils/icons";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// interface Props {
//   quiz: IQuiz;
// }

// function QuizCard({ quiz }: Props) {
//   const router = useRouter();

//   const defaultBaseName = `/categories/image--${quiz.title
//     .toLowerCase()
//     .split(" ")
//     .join("-")}`;

//   const [imageSrc, setImageSrc] = useState(
//     quiz.image || `${defaultBaseName}.svg`
//   );

//   const handleClick = () => {
//     router.push(`/quiz/setup/${quiz.id}`);
//   };

//   return (
//     <div
//       className="cursor-pointer border-2 rounded-xl p-1 shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300 ease-in-out"
//       onClick={handleClick}
//     >
//       <div className="px-6 py-4 flex flex-col gap-4">
//         <div className="rounded-xl h-[16rem] py-1 bg-[#97dbff]/20">
//           <Image
//             src={imageSrc}
//             width={300}
//             height={200}
//             alt="quiz image"
//             className="h-full rounded-xl"
//             onError={() => {
//               if (!quiz.image && imageSrc.endsWith(".svg")) {
//                 setImageSrc(`${defaultBaseName}.png`);
//               }
//             }}
//           />
//         </div>
//         <div>
//           <h2 className="text-xl font-bold">{quiz.title}</h2>
//           <p className="text-gray-600 leading-none font-semibold">
//             {quiz.description}
//           </p>
//         </div>
//         <div className="flex items-center justify-between">
//           <p className="text-gray-400 font-semibold text-sm flex items-center gap-2">
//             <span className="text-xl">{dots}</span>
//             <span>
//               Total Questions:{" "}
//               <span className="font-bold text-gray-600">
//                 {quiz.questions.length}
//               </span>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuizCard;
