import React from "react";
import Lottie from 'react-lottie'

import EnjoyingAnimationJson from '../../assets/LottieJson/enjoying.json'

export const EnjoyingAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: EnjoyingAnimationJson
    }

    return <Lottie options={defaultOptions} width={350} height={350} />
}