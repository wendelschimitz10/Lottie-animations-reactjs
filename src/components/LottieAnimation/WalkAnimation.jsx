import React from "react";
import Lottie from 'react-lottie'

import WalkAnimationJson from '../../assets/LottieJson/walk.json'

export const WalkAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: WalkAnimationJson
    }

    return <Lottie options={defaultOptions} width={450} height={450} />
}