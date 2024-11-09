import React from 'react'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Hey there!  👋

Love the idea of web apps that are fast, smooth, and a joy to use? That's where React.js comes in!  It's all about creating those dynamic, interactive experiences users love.

Whether you're thinking of a snappy single-page app, a complex dashboard, or anything in between, React might be your perfect match.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Why React? <br></br>

1. Speed: React apps are known for being super responsive.<br></br>
2. Flexibility: It's great for projects of all sizes, from small startups to big enterprises.<br></br>
3. Strong Community: Tons of support and resources available.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}