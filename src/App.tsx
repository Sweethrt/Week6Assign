import "./App.css";
import menuicon from "./assets/images/icon-menu.svg";
import favicon from "./assets/images/favicon-32x32.png";
import sparkle from "./assets/images/icon-sparkle.svg";
import rightarrow from "./assets/images/icon-arrow-right.svg";
import plussign from "./assets/images/icon-plus.svg";
import dramasign from "./assets/images/icon-trending-up.svg";

function App() {
  return (
    <div className="bg-blue-700 h-screen w-screen px-80">
      <div className="flex justify-between">
        <div className="h-[50px] p-[10px] flex justify-between gap-2 items-center text-white">
          <img src={favicon}
          alt="" className="w-[10px] h-[10px] "/>
          Bridge colective
        </div>

        <div className="p-[10px]">
          <img src={menuicon} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-3 w-[100%] h-[500px] border border-gray-500 border-l-0 border-r-0 justify-between ">
        <div className=" border border-gray-500 border-l-0 h-full text-white flex justify-center flex-col px-10">
         <h1 className="text-5xl my-10"> A classroom <br/>for every child.</h1>
         <p className="text-gray-300 ">We fund the schools, train the teachers, and <br/>measure what works- so every child we reach <br/>today becomes a graduate tomorrow</p>
        </div>

        <div className=" h-[500px] border-gray-500">
          <div className="p-[40px] h-[250px] border border-gray-500">
            <div className=" flex justify-between mb-25 ">
              <img src={sparkle}
              alt="" className="w-[40px] h-[40px]  "/>
              <p className="text-4xl text-white">2.4M</p>
           </div>
           <div className="text-white">
              <h1>Students reached</h1>
              <p className="text-gray-300">Across 31 countries since 2011</p>
           </div>
          </div>

          <div className="p-[40px] h-[250px] border border-gray-500">
            <div className=" flex justify-between mb-25 ">
              <img src={rightarrow}
              alt="" className="w-[40px] h-[40px] "/>
              <p className="text-4xl text-white ml-auto ">38K</p>
           </div>
           <div className="text-white">
              <h1>Teachers trained</h1>
              <p className="text-gray-300">Equipped with tools and technology.</p>
           </div>
          </div>
        </div>

        <div className=" h-[500px] border border-gray-500 border-r-0">
          <div className="p-[40px] h-[250px] border border-gray-500 border-r-0">
            <div className=" flex justify-between mb-25 ">
              <img src={plussign}
              alt="" className="w-[40px] h-[40px]  "/>
              <p className="text-4xl text-white">1,284</p>
           </div>
           <div className="text-white">
              <h1>Schools partnered</h1>
              <p className="text-gray-300">In 14 countries, from Kenya to Guaterrala</p>
           </div>
          </div>

          <div className="p-[40px] h-[250px] border border-gray-500 border-r-0">
            <div className=" flex justify-between mb-25 ">
              <img src={dramasign}
              alt="" className="w-[40px] h-[40px]  "/>
              <p className="text-4xl text-white">3.1x</p>
           </div>
           <div className="text-white">
              <h1>Graduation lift</h1>
              <p className="text-gray-300">Partner schools outperform national averages 3x.</p>
           </div>
          </div>
        </div>

       
      </div>
       <div className="flex justify-between p-[30px] text-gray-300">
          <p>2026 Bridge Collective</p>
          <p>Resistered charity 12345678</p>
        </div>
    </div>
  );
}

export default App;
