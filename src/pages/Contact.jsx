import { useEffect, useState } from "react";


export default function Contact (){
    const [count, setCount] = useState(0);

  useEffect(() => {
      setCount((count) => count + 1);
  }, []);


    return(
        <div>
            <h1>{() => 'coucou'}</h1>
        </div>
    )
}