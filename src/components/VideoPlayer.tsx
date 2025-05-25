"use client";

import {FC, useEffect, useState} from "react";
import ReactPlayer from "react-player/lazy";
import type {ReactPlayerProps} from "react-player";
import {useLocale} from "next-intl";

export const VideoPlayer: FC<ReactPlayerProps> = ({
                                                      width = "100%",
                                                      height = "100%",
                                                      url,
                                                      config,
                                                      ...props
                                                  }) => {
    const locale = useLocale();
    const [isAllowRender, setIsAllowRender] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window === "undefined") return
        setIsAllowRender(true)

    })

    if (!isAllowRender) {
        return
    }

    return (
        <ReactPlayer
            {...props}
            width={width}
            height={height}
            url={url}
            playsinline={true}
            controls={true}
            config={{
                youtube: {
                    playerVars: {
                        hl: locale,
                        rel: 0,
                    },
                },
            }}
        />
    );
};
