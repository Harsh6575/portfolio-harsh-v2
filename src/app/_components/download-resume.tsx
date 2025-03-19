"use client";
import { Button } from "@/components/ui/button";
import {
    Tooltip, TooltipTrigger, TooltipProvider, TooltipContent
} from "@/components/ui/tooltip";
import { GoDownload } from "react-icons/go";

export const DownloadResume = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="fixed sm:bottom-12 sm:right-12 bottom-8 right-8 z-10" onClick={() => {
                        // Open the PDF file in a new tab
                        window.open('/Harsh_Vansjaliya_Resume.pdf', '_blank');
                    }}>
                        <GoDownload />
                        <span className="ml-2 sr-only">Download Resume</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Download Resume</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
};