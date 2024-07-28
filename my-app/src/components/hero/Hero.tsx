"use client";

import React from "react";
import { Button } from "../ui/button";
import { WiDirectionUpRight } from "react-icons/wi";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
const Hero = () => {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.auth);

  const handleRedirection = () => {
    if (user !== null) {
      router.push("/dashboard");
      return;
    }

    toast({
      variant: "destructive",
      title: "login to get access",
    });
  };

  return (
    <div className="w-full text-center px-4 h-[80vh] flex flex-col items-center gap-5 justify-center">
      <h1 className="text-4xl 600px:text-5xl font-extrabold">
        Smart Solutions for Sustainable Energy Usage
      </h1>
      <p className="max-w-[50rem] text-sm 600px:text-lg ">
        Harness the power of our web app to transform your energy habits.By
        providing details on your current usage,you'll recieve a personalized
        plan with effective alternatives for reducing your environmental
        impact.Achieve greater effciency and sustainability with expert guidance
        from our interactive platform.
      </p>
      <div>
        <Button
          variant="outline"
          className="flex items-center uppercase gap-1 "
          onClick={handleRedirection}
        >
          get your sustainability plan <WiDirectionUpRight size={25} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
