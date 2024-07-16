import React from 'react';

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
                            React development is carried out 
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Ye aap sabhi ka pyaar hai jo main aaj yaha tak pahuch paya, agar aap log nahi hote toh main yaha aaj yaha aapke saamne khada nahi hota. Jhuk ke aap sabhi ko salaam karta hu.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Aap sab chahne wale k wajah se main yaha is mukaam par pahucha hun, ye aap sabhi ka pyaar hai, mera ye saubhagya hai ki aaj main apke liye kuch kar paya, mere kuch karne se aapko khushi milti hai toh main bahut khush hota hu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}