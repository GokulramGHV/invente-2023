'use client'
import { useState } from "react"
import { HospitalityContent } from "./content"

export default function page() {

    const [display, setDisplay] = useState("Instructions")
    return (
        <div>
            <div className="bg-[#181818]">
                <div className="w-full text-white flex flex-row gap-3 justify-around">
                    <span className={`${display === "Instructions" && "border-b-2 border-[#60bff5]"} cursor-pointer`}
                        onClick={() => setDisplay("Instructions")}>
                        Instructions
                    </span>
                    <span className={`${display === "HowToReach" && "border-b-2 border-[#60bff5]"} cursor-pointer`}
                        onClick={() => setDisplay("HowToReach")}>
                        How to reach
                    </span>
                    <span className={`${display === "Accommodations" && "border-b-2 border-[#60bff5]"} cursor-pointer`}
                        onClick={() => setDisplay("Accommodations")}>
                        Accommodations
                    </span>
                    <span className={`${display === "ContactUs" && "border-b-2 border-[#60bff5]"} cursor-pointer`}
                        onClick={() => setDisplay("ContactUs")}>
                        Contact Us
                    </span>
                </div>
                <div>
                    {display === "Instructions" &&
                        <div className="flex flex-col gap-2 p-2">
                            {HospitalityContent["instructions"].map((content, index) => (
                                <div key={index}>
                                    <span className="block font-bold ">{content.heading}:</span>
                                    <ul className="list-disc" >
                                        {content.body.map((instruction, index) => (
                                            <li key={index} >{instruction}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    }
                    {display === "HowToReach" &&
                        <div>
                            <span>{HospitalityContent["how_to_reach"].heading}</span>
                            <span>{HospitalityContent["how_to_reach"].location}</span>
                            {HospitalityContent["how_to_reach"].modes.map((content, index) => (
                                <div key={index}>
                                    <span className="font-bold">{content.mode}</span>
                                    {content.instructions.map((content, index) => (
                                        <div key={index}>{content}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    }
                    {display === "Accommodations" &&
                        <div className="flex flex-col gap-2 list-disc">
                            {HospitalityContent["accommodation"].map((content, index) => (
                                <div>
                                    <span className="font-bold">{content.heading}</span>
                                    :
                                    <span> {content.body}</span>
                                </div>
                            ))}
                        </div>
                    }
                    {display === "ContactUs" &&
                        <div className="flex flex-col items-center">
                            <span>Reach out to us if you have any further queries...</span>
                            {HospitalityContent.contact_us.map((content, index) => (
                                <div key={index} className="flex flex-col justify-center items-center gap-1">
                                    <span className="font-bold text-xl">{content.name}</span>
                                    <span>{content.number}</span>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}