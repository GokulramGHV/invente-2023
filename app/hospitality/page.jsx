'use client'
import { useState } from "react"
import { HospitalityContent } from "./content"

export default function page() {
    console.log(HospitalityContent)

    const [display, setDisplay] = useState("Instructions")
    return (
        <div>
            <div className="min-w-[500px] min-h-[500px] bg-red-300">
                <div className="w-full text-white">
                    <span className="" onClick={() => setDisplay("Instructions")}>Instructions</span>
                    <span onClick={() => setDisplay("HowToReach")}>How to reach</span>
                    <span onClick={() => setDisplay("Accommodations")}>Accommodations</span>
                    <span onClick={() => setDisplay("ContactUs")}>Contact Us</span>
                </div>
                <div>
                    {display === "Instructions" && <div></div>}
                    {display === "HowToReach" && <div></div>}
                    {display === "Accommodations" && <div></div>}
                    {display === "ContactUs" && <div></div>}
                </div>
            </div>
        </div>
    )
}