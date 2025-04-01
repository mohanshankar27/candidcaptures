
import { ExternalLink, Star } from "lucide-react";
import { Button } from "./ui/button";

const GoogleReviewButton = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col gap-3">
        {/* Google Review Button */}
        <a 
          href="https://g.co/kgs/YwbJx5W" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button
            className="group flex flex-col items-center gap-2 px-3 py-6 bg-white shadow-lg hover:bg-primary/10 text-primary rounded-full transition-all duration-300 hover:scale-105"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" 
                  fill="#4285F4"
                />
              </svg>
            </div>
            <span className="font-medium text-xs whitespace-nowrap">Leave a Review</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </a>

        {/* Google Ratings Button - NEW */}
        <a 
          href="https://www.google.com/search?q=Candid+Capture+bangalore&sca_esv=84558b4239d0d7dc&sxsrf=AHTn8zpcyDBoKrE7z6aS3mKNYOIU0wTNrA%3A1743497771765&ei=K6rrZ8exLqad4-EP3t-F2Qs&ved=0ahUKEwiH8-iqu7aMAxWmzjgGHd5vIbsQ4dUDCBA&uact=5&oq=Candid+Capture+bangalore&gs_lp=Egxnd3Mtd2l6LXNlcnAiGENhbmRpZCBDYXB0dXJlIGJhbmdhbG9yZTICECYyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyBRAAGO8FMgUQABjvBUjUGFB8WIoXcAF4AJABAZgB9wSgAZgTqgELMC42LjIuMS4wLjG4AQPIAQD4AQGYAgqgArsOwgIHECMYsAMYJ8ICDRAAGIAEGLADGEMYigXCAgkQABiwAxgHGB7CAggQABiABBiwA8ICBBAjGCfCAgoQABiABBgUGIcCwgIFEAAYgATCAgYQABgWGB7CAgsQABiABBiGAxiKBcICCBAAGAgYDRgemAMAiAYBkAYKkgcHMS42LjIuMaAHsDQ&sclient=gws-wiz-serp&lqi=ChhDYW5kaWQgQ2FwdHVyZSBiYW5nYWxvcmVIw4XR9aqxgIAIWiQQABABGAAYARgCIhhjYW5kaWQgY2FwdHVyZSBiYW5nYWxvcmWSARR3ZWRkaW5nX3Bob3RvZ3JhcGhlcqoBXwoIL20vMDljMTcQASoSIg5jYW5kaWQgY2FwdHVyZSgAMh8QASIbnhkg3LSR6UcIv9O5dBZsbAVxvb1zgEgQysRIMhwQAiIYY2FuZGlkIGNhcHR1cmUgYmFuZ2Fsb3Jl#rlimm=9088005409797166387" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button
            className="group flex flex-col items-center gap-2 px-3 py-6 bg-white shadow-lg hover:bg-yellow-50 text-primary rounded-full transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="font-medium text-xs whitespace-nowrap">4.9 Rating</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewButton;
