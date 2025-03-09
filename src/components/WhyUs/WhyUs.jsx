import React from "react";
import { Fade } from "react-awesome-reveal";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
// import customerCare from "../../assets/customer-care.jpg"

const WhyChooseUs = () => {
    const features = [
        {
            icon: <RiCustomerService2Fill></RiCustomerService2Fill>,
            title: "24x7 expert support",
            description:
                "Get expert assistance whenever you need it to address your concerns.",
        },

        {
            icon: <MdDashboardCustomize />,
            title: "Smart dashboard",
            description:
                "Manage all your fundraiser details with an intuitive and interactive dashboard.",
        },
        {
            icon: <AiFillSafetyCertificate />,
            title: "Safety and security",
            description:
                "Keep your funds safe with the most secure encryption technology.",
        },
    ];

    return (
        <section className="bg-[url('')] bg-no-repeat bg-cover bg-center py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Why choose <span className="text-[#019DBF]">IgniFund?</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 py-10 px-5">
                    {features.map((feature, idx) => (
                        <Fade key={idx}>
                            <div
                                className="border border-[#019DBF] p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gradient-to-r from-[#13cbf5] to-[#41eadc] p-4 rounded-full shadow-md">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold hover:text-[#019DBF] transition-colors">
                                            {feature.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm  0 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </Fade>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default WhyChooseUs;

