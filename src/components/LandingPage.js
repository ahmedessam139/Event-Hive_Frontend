import FeaturesZigZag from "@/components/Landing_Page_partials/FeaturesZigZag";
import HeroHome from "@/components/Landing_Page_partials/HeroHome";
import React from "react";


function LandingPage() {


    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col min-h-screen overflow-x-hidden ">

                <main className="grow">
                    <HeroHome />
                    <FeaturesZigZag  />
                </main>
            </div>
        </div>
    );
}

export default LandingPage;
