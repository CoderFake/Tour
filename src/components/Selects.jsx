import React from 'react'
import SelectsCard from './SelectsCard';
const Selects = () => {

    const data = [
        {
            id:1,
            src: "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Bora Bora"
        },
        {
            id:2,
            src: "https://images.unsplash.com/photo-1582368312260-04dd28d21248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            title: "Ibiza"
        },
        {
            id:3,
            src: "https://images.unsplash.com/photo-1524778880162-1b5dccfbdb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            title: "Punta Cana"
        },
        {
            id:4,
            src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1264&q=80",
            title: "Bahamas"
        },
        {
            id:5,
            src: "https://images.unsplash.com/photo-1586302836983-d1efb5eee221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            title: "Krabi"
        },
        {
            id:6,
            src: "https://images.unsplash.com/photo-1565503187147-6b0012bab4da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Vietnam"
        }
    ]
  return (
    <div className='container mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {data.map(({id, src, title}) => (
            <SelectsCard key={id} bg={src} text={title} />
        ))}

    
    
        
    </div>
  )
}

export default Selects