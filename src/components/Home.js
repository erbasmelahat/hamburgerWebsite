import React from "react";
import Images1 from "../images/6.jpg";
import Images2 from "../images/14.jpg";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${Images1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20 "></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-3xl items-end justify-end">
            <h1 className="mb-5 text-5xl font-bold text-slate-300 ">
              En Lezzetli Burger Deneyimi Seni Bekliyor!
            </h1>
            <p className="mb-5 text-lg text-slate-300">
              Burger aşıklarına özel, taptaze malzemelerle hazırladığımız efsane
              burgerlerimizle tanışmaya hazır mısınız? Her lokmada gerçek
              lezzeti hissedin! Klasikten gurme seçeneklere, damak tadınıza
              uygun zengin bir menüyle karşınızdayız. Şimdi sipariş verin, enfes
              lezzetlerimizi denemenin tam zamanı!
            </p>
            <button className="btn text-gray-300">Lezzeti Keşfet!</button>
          </div>
        </div>
      </div>
      {/* <div className="flex w-full justify-center items-center p-10">
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
      </div> */}

      <div className="flex flex-col lg:flex-row flex-wrap gap-10 p-10 justify-center items-center">
        <div className="card bg-base-100 shadow-xl w-full lg:w-1/4">
          <figure>
            <img
              src={Images2}
              className="h-48 w-full object-cover"
              alt="Album"
            />
          </figure>
          <div className="card-body bg-base-300">
            <h2 className="card-title">
              Burgerin Tarihçesi: İlk Hamburger
            </h2>
            <p>
              Hamburger, 19. yüzyılda Almanya’nın Hamburg şehrinden ilham alarak
              ortaya çıktı. Amerika’ya göç eden Almanlar sayesinde popülerleşti
              ve 1904 St. Louis Dünya Fuarı’nda ekmek arasında servis edilerek
              bugünkü halini aldı.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full lg:w-1/4">
          <figure>
            <img
              src={Images2}
              className="h-48 w-full object-cover"
              alt="Album"
            />
          </figure>
          <div className="card-body bg-base-300">
            <h2 className="card-title">Mükemmel Burger Nasıl Hazırlanır?</h2>
            <p>
              Kaliteli malzemeler mükemmel bir burgerin anahtarıdır. Sulu bir
              köfte, taze sebzeler, eriyen peynir ve özel soslar, hafif
              kızartılmış ekmekle birleşerek ideal lezzeti oluşturur.
              Malzemeleri doğru oranlarda bir araya getirmek başarının sırrıdır.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full lg:w-1/4">
          <figure>
            <img
              src={Images2}
              className="h-48 w-full object-cover"
              alt="Album"
            />
          </figure>
          <div className="card-body bg-base-300">
            <h2 className="card-title">
              Vejetaryen ve Vegan Burger Seçenekleri Artıyor!
            </h2>
            <p>
              Vejetaryen ve vegan burgerler, bitki bazlı köfteler, peynirler ve
              soslarla hem lezzetli hem de sağlıklı bir alternatif sunuyor.
              Artık herkes için yaratıcı ve sürdürülebilir seçenekler mevcut!
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
