import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between border border-l-0 border-r-0 border-b-black">
      <div className="w-24 border-yellow-700 borer">
        <img
          className="object-scale-down"
          src="https://mounwat.com/wp-content/uploads/2021/09/FB_IMG_1630360739146-1.jpg"
        />
      </div>
      <div className="flex justify-center gap-6">
        <p className="m-auto text-2xl">John Doe</p>
        <div className="m-auto overflow-hidden rounded-full w-14">
          <img
            className="object-scale-down"
            src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
          />
        </div>
      </div>
    </div>
  );
}
