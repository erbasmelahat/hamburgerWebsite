import React from "react";
import Image from "../images/3.jpg";
import Image1 from "../images/5.jpg";
import Image2 from "../images/11.jpg";
import Image3 from "../images/7.jpg";

function About() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col gap-10 items-center max-w-screen-lg pt-10 ">
        <div className="carousel rounded-box">
          <div className="carousel-item w-1/4">
            <img src={Image} alt="Burger" />
          </div>
          <div className="carousel-item w-1/4">
            <img src={Image1} alt="Burger" />
          </div>
          <div className="carousel-item w-1/4">
            <img src={Image2} alt="Burger" />
          </div>
          <div className="carousel-item w-1/4">
            <img src={Image3} alt="Burger" />
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold ">Lezzet Tutkumuzun Hikayesi</h1>
          <p className="py-6">
            Biz burger severler için bir hayal kurduk: her ısırıkta mutluluğu
            yaşatan burgerler hazırlamak. Yola, en kaliteli malzemelerle başlama
            kararı aldık. Doğal ve taze ürünlerimizi, ustalıkla hazırlanan özel
            soslarımızla buluşturduk. İster klasik bir cheeseburger, ister özgün
            bir tarif; her tarifimiz sevgi ve özenle hazırlandı. Vizyonumuz,
            sadece bir yemek deneyimi sunmak değil, sizin için unutulmaz anılar
            yaratmaktır. Siz de bu hikayenin bir parçası olun; çünkü burger,
            sadece bir yemek değil, bir yaşam tarzıdır!
          </p>
          <p className="py-6">
            Vizyonumuz, sadece bir yemek deneyimi sunmak değil, sizin için
            unutulmaz anılar yaratmaktır. Siz de bu hikayenin bir parçası olun;
            çünkü burger, sadece bir yemek değil, bir yaşam tarzıdır!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
