import React from "react";
import Image from "next/image";
export default function TeacherDetails() {
  const myLoader = ({ src }) => {
    return "https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png";
  };
  return (
    <div className="flex flex-col justify-center flex-grow gap-12 p-8 align-middle">
      <div className="m-auto overflow-hidden rounded-md ">
        <Image
          loader={myLoader}
          layout="fixed"
          src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
          alt="teacher"
          width={250}
          height={250}
        />
      </div>

      {/* this is the unordered list the will show the details of each teacher */}
      <ul className="mx-auto text-xl ">
        <li>
          Name: <strong className="mx-3">John Doe</strong>
        </li>
        <li>
          School: <strong className="mx-3">Excellence Schools</strong>
        </li>
        <li>
          Qualification: <strong className="mx-3">Bachelor</strong>
        </li>
        <li>
          Directorate: <strong className="mx-3">Amman 1</strong>
        </li>
        <li>
          National ID: <strong className="mx-3">2000725801</strong>
        </li>
        <li>
          Employee ID: <strong className="mx-3">2524521</strong>
        </li>
      </ul>
    </div>
  );
}
