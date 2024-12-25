import React from "react";
import Images1 from "../images/2.jpg";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${Images1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40 "></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-3xl items-end justify-end">
            <h1 className="mb-5 text-5xl font-bold">
              En Lezzetli Burger Deneyimi Seni Bekliyor!
            </h1>
            <p className="mb-5 text-lg">
              Burger aşıklarına özel, taptaze malzemelerle hazırladığımız efsane
              burgerlerimizle tanışmaya hazır mısınız? Her lokmada gerçek
              lezzeti hissedin! Klasikten gurme seçeneklere, damak tadınıza
              uygun zengin bir menüyle karşınızdayız. Şimdi sipariş verin, enfes
              lezzetlerimizi denemenin tam zamanı!
            </p>
            <button className="btn ">Lezzeti Keşfet!</button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center p-10">
        <div className="flex max-w-full justify-center  gap-5">
          <div className="chat chat-start">
            <div className="chat-bubble">
              Siparişler ne kadar sürede hazırlanıyor?
            </div>
          </div>
          <div className="chat chat-end  mt-16">
            <div className="chat-bubble">
              Siparişleriniz genellikle 15-20 dakika içinde hazırlanır. Teslimat
              süresi ise bulunduğunuz bölgeye bağlıdır.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
