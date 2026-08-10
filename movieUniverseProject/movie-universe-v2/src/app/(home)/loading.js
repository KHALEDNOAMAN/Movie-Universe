import React from "react";

export default function loading() {
  const cards = [
    {
      id: 1,
      whichCard: "cardone",
    },
    {
      id: 2,
      whichCard: "cardtwo",
    },
    {
      id: 3,
      whichCard: "cardthree",
    },
    {
      id: 4,
      whichCard: "cardfour",
    },
    {
      id: 5,
      whichCard: "cardfive",
    },
  ];
  return (
    <div className="w-full h-screen flex justify-between flex-col gap-10">
      <div className="w-full h-170 bg-[#0a0713] animate-pulse rounded-lg border border-white/20">
        <div className="w-100 h-full flex flex-col gap-10 p-10">
          <h1 className="bg-[#2c2c34] w-70 h-10 rounded-lg animate-pulse"></h1>
          <h1 className="bg-[#2c2c34] w-full h-10 rounded-lg animate-pulse"></h1>
          <div className="w-full flex gap-5">
            <p className="bg-[#2c2c34] w-50 h-10 rounded-lg animate-pulse"></p>
            <p className="bg-[#2c2c34] w-30 h-10 rounded-lg animate-pulse"></p>
            <p className="bg-[#2c2c34] w-30 h-10 rounded-lg animate-pulse"></p>
            <p className="bg-[#2c2c34] w-30 h-10 rounded-lg animate-pulse"></p>
          </div>
          <p className="w-full h-30 bg-[#2c2c34] rounded-lg animate-pulse"></p>
          <div className="w-full flex gap-5">
            <p className="bg-[#2c2c34] w-20 h-10 rounded-lg animate-pulse"></p>
            <p className="bg-[#2c2c34] w-40 h-10 rounded-lg animate-pulse"></p>
          </div>
          <div className="w-full flex gap-3">
            <p className="bg-[#2c2c34] w-40 h-10 rounded-lg animate-pulse"></p>
            <p className="bg-[#2c2c34] w-10 h-10 rounded-full animate-pulse"></p>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-5">
        {cards.map((items) => {
          return (
            <div
              key={items.id}
              className="w-60 h-80 rounded-lg flex flex-col gap-2 border border-white/20"
            >
              <div className="w-full h-70 bg-[#0a0713] animate-pulse"></div>
              <h1 className="w-full h-10 bg-[#0a0713] animate-pulse"></h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
