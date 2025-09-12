import Btn from "./btn.jsx";

export default function Username() {
   return <div className="flex w-fit h-fit items-center justify-evenly gap-6 rounded-2xl bg-gradient-to-l from-purple-500 to-blue-500 p-4 flex-col mx-auto mt-10 px-5 py-10">
   <label className="text-white text-4xl font-bold pointer-events-none">Enter a username</label>   
   <input 
   type="text"
   placeholder="username"
   className="border-4 rounded-2xl px-2 py-2 text-2xl cursor-text border-gray-300 focus:outline-none focus:border-white"></input>
   <Btn tc="Submit" />
   </div>
}