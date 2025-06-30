"use client"

import { Dropdown } from "./components/dropdown"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl lg:text-7xl italic  tracking-wide font-bold text-slate-100 text-center sm:text-left mb-30">
            Translata
          </h1>
          <p className="text-base md:text-lg text-gray-400/60 text-center sm:text-left max-w-2xl">
            Not your regular translator. This is AI based language translator - our own Translata.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col container w-80">
            <Dropdown 
              name="sourceLanguage" 
              value="eng" 
              languageForm={(value) => console.log('Source language:', value)} 
            />
            <textarea className="border border-gray-300 rounded-md p-4 bg-white text-gray-700 mt-2 min-h-[200px] resize-none focus:ring-blue-200 focus:border-blue-500 w-full" placeholder="Enter text to translate..."></textarea>
          </div>

          <div className="flex flex-col container w-80">
            <Dropdown 
              name="targetLanguage" 
              value="sp" 
              languageForm={(value) => console.log('Target language:', value)} 
            />
            <textarea className="border border-gray-300 rounded-md p-4 bg-white text-gray-700 mt-2 min-h-[200px] resize-none focus:ring-blue-200 focus:border-blue-500 w-full" placeholder="Translation will appear here..."></textarea>
          </div>
        </div>

        <button className="p-2 rounded-md bg-slate-800 text-white">Translate</button>

      </main>
    </div>
  )
}