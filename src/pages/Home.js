import ContentBox from '../components/ContentBox'
import Image from '../components/Image'

export default function Home(){
    return(
        <div className="bg-white lg:w-[850px] lg:h-fit rounded-2xl sm:flex sm:flex-col-reverse lg:flex lg:flex-row lg:p-5">
            <ContentBox/>
            <Image/>
        </div>
    )
}