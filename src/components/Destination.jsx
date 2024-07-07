import React from 'react'

const Destination = () => {

    const data = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            division: "Maldives",
            title: "Sun Siyam Olhuveli",
            description: "Meeru Island Resort welcomes you to experience an original beach filled holiday with a dash of simply Maldivian blending into every element of your holiday."
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            division: "Maldives",
            title: "Hurawalhi Island Resort",
            description: "Hurawalhi Island Resort is much like your relationship: it is a perfect match of serenity and excitement, comfort and adventure. It stirs up your everyday intimacy and thrill."
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            division: "Thailand",
            title: "Phuket Island",
            description: "Hurawalhi Island Resort is much like your relationship: it is a perfect match of serenity and excitement, comfort and adventure. It stirs up your everyday intimacy and thrill."
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            division: "Indonesia",
            title: "Bali",
            description: "Hurawalhi Island Resort is much like your relationship: it is a perfect match of serenity and excitement, comfort and adventure. It stirs up your everyday intimacy and thrill."
        }
    ]


  return (
    <div className='container mx-auto'>
        <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Top Destinations</h1>
        <div class="h-1 w-1/2 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whether it's traveling to the Azores, Jamaica, the Dominican Republic or just enjoying a ski holiday in Quebec or adventures in the Yukon there are so many amazing travel experiences waiting for you. Below are the list of some of our favorite destinations</p>
    </div>
    <div class="flex flex-wrap -m-4">
        {data.map(({id, src, division, title, description}) => (
                  <div key={id} class=" md:w-1/2 p-4">
                  <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <img class="h-60 rounded w-full object-cover mb-6" src={src} alt="content"/>
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{division}</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
                    <p class="leading-relaxed text-base">{description}</p>
                  </div>
                </div>
        ))
        }
    </div>
  </div>
</section>
        </div>
    </div>
  )
}

export default Destination