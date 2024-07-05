export const Button = ({onClick,children}: {onClick: ()=>void,children: React.ReactNode }) => {
    return  <button onClick={onClick} className="bg-green-500 hover:bg-blue-780 text-white font-bold px-16 py-7 rounded text-2xl">{children}</button>
     
    
}