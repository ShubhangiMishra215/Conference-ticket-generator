import React from "react";
import Header from "../components/Header";
import { useLocation, Navigate } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();

  if (!state) return <Navigate to="/" replace />;

  const { firstName, email, github, avatarPreview } = state;

  return (
    <div className="py-10 px-6 flex flex-col justify-center items-center mb-45">
      <Header
        title={
          <>
            Congrats,{" "}
            <span className="bg-[linear-gradient(to_right,hsl(7,86%,67%),hsl(0,0%,100%))] bg-clip-text text-transparent">
              {firstName}!
            </span>
            <br className="hidden md:block" />
            Your ticket is ready.
          </>
        }
        des={
          <>
            We've emailed your ticket to <br className="hidden md:block" />
            <span className="text-[hsl(7,88%,67%)]/80">{email} </span>
            and will send updates in
            <br className="hidden md:block" />
            the run up to the event.
          </>
        }
      />

      <div className="relative inline-block mt-15">
        <img src="/assets/images/pattern-ticket.svg" alt="" aria-hidden="true" className="block opacity-100"/>

        <div className="absolute inset-0 flex justify-between md:px-8 md:py-6 px-4 py-3">
          
          <div className="flex flex-col justify-between md:py-2 py-1">
            
            <div>
              <img
                src="/assets/images/logo-full.svg"
                alt="Coding Conf logo"
                width={180}
                className="md:w-[15rem]"
              />
              <p className="pl-10 pt-1 text-sm text-[hsl(255,3%,73%)] md:pt-3 md:tracking-widest md:text-[1rem]">
                Jan 31, 2025 / Austin, TX
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <img src={avatarPreview} alt={`${firstName}'s avatar`} className="w-12 h-12 rounded-lg md:w-18 md:h-18" />
              <div>
                <h2 className="text-white text-[1.2rem] md:text-3xl">{firstName}</h2>
                <p className="flex items-center gap-1 text-sm text-[hsl(255,3%,73%)] md:text-[1rem] md:pt-1">
                  <img
                    src="/assets/images/icon-github.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 md:w-8 md:h-8"
                  />
                  {github}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <p className="rotate-90 text-[hsl(245,15%,58%)] font-semibold text-[1.2rem] md:text-[1.5rem]">
              #01609
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;