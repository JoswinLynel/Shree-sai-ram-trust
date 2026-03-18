import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HighlightCardProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  className?: string;
}

const HighlightCard: FC<HighlightCardProps> = ({ title, description, icon, className }) => {
  return (
    <div className={cn("group cursor-pointer transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] h-full", className)}>
      <Card className="rounded-2xl border-transparent bg-white/80 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:border-saffron/20 hover:shadow-[0_15px_30px_rgb(235,123,38,0.1)] relative overflow-hidden h-full flex flex-col">
        
        {/* Background glow animations */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-saffron/5 to-gold/5 opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-tr from-saffron/20 to-transparent blur-3xl opacity-30 group-hover:opacity-60 transform group-hover:scale-125 transition-all duration-700"></div>
          <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-saffron/5 blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-16 left-16 w-12 h-12 rounded-full bg-gold/5 blur-lg animate-pulse" style={{ animationDuration: '5s' }}></div>
          
          {/* Sweeping shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        {/* Content – horizontal layout for compact rectangular look */}
        <div className="p-5 md:p-6 relative z-10 flex items-start gap-5 flex-grow">
          {/* Icon */}
          <div className="relative flex-shrink-0 mt-0.5">
            <div className="absolute -inset-1 rounded-xl border border-saffron/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '3s' }}></div>
            
            <div className="w-12 h-12 rounded-xl border border-saffron/10 bg-saffron/10 shadow-sm flex items-center justify-center transform group-hover:scale-110 group-hover:bg-saffron/20 transition-all duration-500">
              <div className="transform group-hover:rotate-[15deg] transition-transform duration-700 text-saffron">
                {icon}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-grow min-w-0">
            <h3 className="mb-1.5 text-lg font-bold text-espresso group-hover:text-saffron transition-colors duration-300 drop-shadow-sm">
              {title}
            </h3>

            <div className="mb-2 w-8 h-[2px] bg-saffron/30 rounded-full group-hover:w-14 group-hover:bg-gold transition-all duration-500 ease-out"></div>

            <div className="space-y-1">
              {description.map((line, idx) => (
                <p
                  key={idx}
                  className="text-taupe text-sm leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Corner glowing accents */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-saffron/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gold/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </Card>
    </div>
  );
};

export default HighlightCard;
