import ContentBox from '../components/ContentBox'
import Image from '../components/Image'

export default function Home(){
    return(
        <div className="bg-white lg:w-[850px] lg:h-fit rounded-2xl flex p-5">
            <ContentBox/>
            <Image/>
        </div>
    )
}