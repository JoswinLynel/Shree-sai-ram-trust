import React from 'react';
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  className?: string
  backgroundImage?: string
  author: {
    name: string
    avatar?: string
    icon?: React.ReactNode
    readTime?: string
  }
  content: {
    title: string
    description: string
  }
}

export const AuthorCard = ({ 
  className,
  backgroundImage,
  author,
  content
}: AuthorCardProps) => {
  return (
    <div className="max-w-xs w-full group/card mx-auto">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl max-w-sm mx-auto flex flex-col justify-between p-6 bg-cover bg-center transition-transform duration-500 hover:-translate-y-2",
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-500 bg-black/40 group-hover/card:bg-black/70" />
        <div className="flex flex-row items-center space-x-4 z-10">
          {author.icon ? (
            <div className="h-12 w-12 rounded-full border-2 border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
               {author.icon}
            </div>
          ) : author.avatar ? (
            <img
              alt={`${author.name}'s avatar`}
              src={author.avatar}
              className="h-12 w-12 rounded-full border-2 border-white/20 object-cover shrink-0"
            />
          ) : null}
          <div className="flex flex-col">
            <p className="font-medium text-lg text-gray-50 relative z-10">
              {author.name}
            </p>
            {author.readTime && (
              <p className="text-sm text-gray-300 font-light">{author.readTime}</p>
            )}
          </div>
        </div>
        <div className="text content relative z-10">
          <h1 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3 drop-shadow-md">
            {content.title}
          </h1>
          <p className="font-normal text-sm md:text-base text-gray-200 leading-relaxed font-light drop-shadow">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  )
}
