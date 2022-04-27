import Image from "next/image"
import { Wrapper, ImageWrapper } from "../styles/slug.style"
import { BackBtn } from "../components/ui/backBtn"
import Lionel from '../public/images/lionel.jpg'

const FourOFour = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image
                    src={Lionel}
                    alt="No one found here"
                    layout="responsive"
                    objectFit="cover"
                />
            </ImageWrapper>
            <BackBtn />
        </Wrapper>
    )
}

export default FourOFour