import { useEffect } from 'react'

const useClickOutside = (elementRef, handler) => {

    console.log("Handler", handler);
    console.log("ElementRef", elementRef);
  
    useEffect(() => {
        const cb = (event) => {
            if(!elementRef.current?.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", cb);

        return () => {
            document.removeEventListener("mousedown", cb);
        };
        
    }, [elementRef, handler]);

    { /*
        1. check what is being passed down as elementRef, handler using console.log
        2. call useEffect ->
            create event cb which will call handler function when mousedown event happens( clicked anywhere in the doc)
        3. return function is created the remove the mousedown event
    */}

}

export default useClickOutside