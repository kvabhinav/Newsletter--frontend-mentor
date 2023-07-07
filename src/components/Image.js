import illustration from '..//images/illustration.svg'
import illustrationMobile from '../images/illustrationMobile.svg'

export default function Image(){
    return(
        <div className=" h-full rounded-xl">
            <img src={illustration} alt="illustration.img" className='hidden lg:block'></img>
            <img src={illustrationMobile} alt='' className='lg:hidden w-full h-full'></img>
        </div>
    )
}