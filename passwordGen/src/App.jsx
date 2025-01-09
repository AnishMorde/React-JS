import { useState , useCallback , useEffect  , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[number , allowNum ] = useState(false)
  const[character , allowChar ] = useState(false)
  const [ password , setPassword] = useState()

  //useRef 

  const passwordRef = useRef(null)


  //generation of the password 
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(number)str+="0123456789"
    if(character)str+="!@#$%^&*()+=[]{}~"

    for (let i = 1 ; i <= length; i++) {
      let char = Math.floor( Math.random()* str.length +1);

      pass += str.charAt(char);
       
    }

    setPassword(pass)

  } ,[length , number , character , setPassword ])
  
  const copyText = useCallback(()=>{
    //select text while copy the text
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  } , [password])

  //useEffect refresh or the change the password when chanhes the inp and also the to run the passwordGen() method
  //also for the memorization and to store in the cache
  useEffect(()=>{
    passwordGenerator()
  },[length , number , character , passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-900 '>
      <h1 className='text-white text-center my-3' >Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4' >
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-400
         text-white px-3 py-0.5 shrink-0 '
         onClick={copyText} >copy</button>
      </div>
      <div className='flex text-sm gap-x-2' >

        <div className='flex items-center gap-x-1' >
        <input 
             min={8}
             max={16}
             className='cursor-pointer'
               onChange={(e)=>{setLength(e.target.value)}}
             type="range"
            /> 
            <label htmlFor="">Length : {length}</label>
        </div>

        <div className='flex items-center gap-x-1' >
          <input
           type="checkBox"
           defaultChecked={number}
           id="numberInp" 
           onChange={()=>{allowNum((prev)=>!prev)

           }}
           /> <label >Numbers</label>
        </div>

        <div className='flex items-center gap-x-1' >
        <input
           type="checkBox"
           defaultChecked={character}
           id="charInp" 
           onChange={()=>{allowChar((prev)=>!prev)

           }}
           /> <label >Characters</label>
        </div>
           
      </div>
       </div>
    </>
  )
}

export default App
