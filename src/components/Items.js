import React from "react";
import { Link } from "react-router-dom";
import {PaperAirplaneIcon} from "@heroicons/react/24/solid"

const Items = () => {
  return (
    <>
      <section class=" body-font text-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src="../images/kenju.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3"></h1>
            <p class="leading-relaxed mb-3">A fighting game which you can play with your friends.</p>
            <div class="flex items-center flex-wrap ">
              <a href="https://sastashadowfight.netlify.app" target="_blank" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><PaperAirplaneIcon className="h-5 -rotate-45"/></a>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src="../images/fishgame.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Fish game</h1>
            <p class="leading-relaxed mb-3">A Fish game</p>
            <div class="flex items-center flex-wrap">
              <a href="https://fishclash.netlify.app" target="_blank" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><PaperAirplaneIcon className="h-5 -rotate-45"/>
                
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src="../images/flapp.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Flappy Bird</h1>
            <p class="leading-relaxed mb-3">Flappy bird</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><PaperAirplaneIcon className="h-5 -rotate-45"/>
                
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src="../images/game1.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Tic Tac Toe</h1>
            <p class="leading-relaxed mb-3">Tic Tac Toe</p>
            <div class="flex items-center flex-wrap ">
              <a href="https://vokkytokky.netlify.app" target="_blank" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><PaperAirplaneIcon className="h-5 -rotate-45"/>
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src="../images/dog.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed mb-3">Dog animation</p>
            <div class="flex items-center flex-wrap ">
              <a href="https://yourvirtualdog.netlify.app" target="_blank" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><PaperAirplaneIcon className="h-5 -rotate-45"/>
                
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-60 md:h-36 w-full object-cover object-center" src="../images/miney.png" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed mb-3">Top_To_Down game</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><PaperAirplaneIcon className="h-5 -rotate-45"/>
                
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Items;
