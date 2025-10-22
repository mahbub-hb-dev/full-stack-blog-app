import { Badge } from '@/components/ui/badge'

const SinglePageContent = () => {
  return (
    <div className="w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
        <div className="text-center max-w-3xl">
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                Customized Shadcn UI Blocks & Components
            </h1>
            <div className="flex items-center gap-3 justify-center py-4">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none"> Technology </Badge>
                <span className="font-medium text-xs text-muted-foreground"> 5 min read </span>
            </div>
        </div>
        <div>
            <img className="max-w-[50%] mx-auto" src="https://i.postimg.cc/DzjDxX7t/pexels-life-of-pix-7974-1.jpg" alt="Laptop" />
        </div>
        <div className="container mx-auto bg-accent rounded-xl">
            <div className="p-6 text-justify">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio reiciendis, assumenda quibusdam at possimus, nulla esse quas eum ipsum aperiam iusto? Minus, error qui at, perferendis ipsam consectetur quaerat est rem blanditiis eveniet nihil iure a quia. Illum labore tenetur amet obcaecati atque assumenda ratione beatae, dolorem perferendis quae in hic ad maiores magni! Sed est, non sequi veniam ipsum aspernatur! Animi libero ea expedita eum unde autem perspiciatis. Odit distinctio quasi praesentium hic ab pariatur minima quod earum dicta non? Reprehenderit in fugiat velit laudantium eius doloremque rerum atque, quae tempora facere repellat cum delectus tempore. Quibusdam ipsa libero eaque accusantium sint! Deleniti excepturi, nesciunt consectetur, pariatur reiciendis repudiandae aperiam, tempora rerum asperiores repellat libero. Blanditiis dolorem ad tempore molestias odio, excepturi veniam corrupti nulla sunt quas odit rerum, eum cum non nam enim amet laudantium? Dolore, inventore at officia pariatur beatae et dolorum vel eum sit quibusdam, natus laudantium consequatur ducimus, commodi ut! Delectus molestiae reiciendis voluptate necessitatibus repudiandae consectetur. Ex totam harum adipisci fuga voluptate, nemo sapiente voluptates nobis aperiam. Natus, asperiores fugiat, vel quam excepturi velit rem, dolorum delectus magni aperiam optio tempore! Quos nulla impedit cum quo adipisci repudiandae facilis ut magni, voluptatum unde.</p>
            </div>
        </div>
    </div> 
  )
}

export default SinglePageContent
