import illustration from '..//images/illustration.svg'

export default function Image(){
    return(
        <div className=" h-full rounded-xl">
            <img src={illustration} alt="illustration.img"></img>
        </div>
    )
}