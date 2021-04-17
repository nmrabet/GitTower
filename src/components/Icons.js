import React from "react";
import facebook from "../assets/icons/facebook_icon.svg";
import question from "../assets/icons/questions_icon.svg";
import twitter from "../assets/icons/twitter_icon.svg";
import linkedin from "../assets/icons/linkedin_icon.svg";

const icons = [
  {
    id: 1,
    img: facebook,
    url: "https://www.facebook.com/gittower/",
  },
  {
    id: 2,
    img: twitter,
    url: "https://twitter.com/gittower",
  },
  {
    id: 3,
    img: linkedin,
    url: "https://www.linkedin.com/company/gittower/?originalSubdomain=de",
  },
  {
    id: 4,
    img: question,
    url: "",
  },
];

export default function Icons() {
  return (
    <div>
      {icons.map((el) => {
        return (
          <div key={el.id}>
            <a href={el.url} className='icon'>
              <img src={el.img} alt="" width='35px'/>
            </a>
          </div>
        );
      })}
    </div>
  );
}
