import React from "react";
import Images1 from "../images/14.jpg";

function Contact() {
  return (
    <div>
      <div
        className="hero bg-base-200 min-h-screen "
        style={{
          backgroundImage: `url(${Images1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-30 "></div>

        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Bize Ulaşın!</h1>
            <p className="py-6 text-slate-300 text-lg ">
              Her zaman sizinle iletişimde olmak bizim için büyük bir mutluluk!
              Sorularınızı yanıtlamak, önerilerinizi dinlemek veya
              siparişleriniz hakkında size yardımcı olmak için buradayız.
              <br />
              Eğer bir konuda destek almak isterseniz ya da sadece "Merhaba"
              demek isterseniz, aşağıdaki iletişim kanallarımızı
              kullanabilirsiniz.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
