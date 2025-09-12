import Username from "./Username"

export default function Btn({ tc, px="px-8", py="py-4"}){
    function greeting(){
        
    }
    return <button onClick={greeting} className={`bg-violet-500 w-fit h-fit ${px} ${py} text-4xl rounded-2xl font-bold text-gray-100 hover:bg-purple-600 transform active:bg-purple-700 transition cursor-pointer`}>{tc}</button>
}
