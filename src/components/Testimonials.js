import React from 'react'

const avatars = [
    {
        id: 1,
        name: 'Marcie Thurow',
        pic: 'https://xsgames.co/randomusers/avatar.php?g=female',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla, voluptatum praesentium deleniti nobis reprehenderit recusandae quam magni earum dicta magnam, hic minus labore libero quas mollitia cum quidem commodi.'
    },
    {
        id: 2,
        name: 'Larry Trovillion',
        pic: 'https://xsgames.co/randomusers/avatar.php?g=male',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla, voluptatum praesentium deleniti nobis reprehenderit recusandae quam magni earum dicta magnam, hic minus labore libero quas mollitia cum quidem commodi.'
    },
    {
        id: 3,
        name: 'Eneida Affleck',
        pic: 'https://xsgames.co/randomusers/avatar.php?g=female',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla, voluptatum praesentium deleniti nobis reprehenderit recusandae quam magni earum dicta magnam, hic minus labore libero quas mollitia cum quidem commodi.'
    },
    {
        id: 4,
        name: 'Jody Hoffeld',
        pic: 'https://xsgames.co/randomusers/avatar.php?g=male',
        testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla, voluptatum praesentium deleniti nobis reprehenderit recusandae quam magni earum dicta magnam, hic minus labore libero quas mollitia cum quidem commodi.'
    },
];

const Testimonials = () => {
  return (
    <article className='flex flex-col items-center w-full h-auto gap-4 relative'>
        <div className='z-40'>
            <p className='text-fuchsia-900 text-3xl px-2 py-1 bg-white font-bold'>Here's what our clients are saying about us.</p>
        </div>
        <div className='w-full h-1 mx-10 bg-fuchsia-900 absolute top-5 z-30'></div>
        <div className='flex items-center gap-8'>
            {avatars.map(client => {
                return (
                <div key={client.id} className='flex flex-col gap-2 w-80 p-4 border-2 border-fuchsia-900 rounded-xl relative'>
                    <div>
                        <p className='text-fuchsia-900 text-xl font-bold'>{client.name}</p>
                    </div>
                    <div>
                        <p className='text-base text-justify line-clamp-3'>"{client.testimonial}"</p>
                    </div>
                    <div>
                        <img src={client.pic} alt={client.name} className='w-8 rounded-full absolute top-2 right-2 border-2 border-fuchsia-900' />
                    </div>
                </div>
                )
            })}
        </div>
        <div className='w-full h-1 mx-10 bg-fuchsia-900 mt-4 z-30'></div>
    </article>
  )
}

export default Testimonials
