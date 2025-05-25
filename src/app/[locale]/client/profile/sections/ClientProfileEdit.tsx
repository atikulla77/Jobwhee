'use client';
import {useState, useCallback, useEffect} from 'react';
import Cropper from 'react-easy-crop';
import {LoupeZoomIcon} from '../../../../../../public/icons/LoupeZoomIcon';
import {MoveIcon} from '../../../../../../public/icons/MoveIcon';
import {RotateIcon} from '../../../../../../public/icons/RotateIcon';
import {CloseIcon} from '../../../../../../public/icons/talent-client/CloseIcon';

interface PopupProps {
    imgUrl: string;
    setPopupOpened: (popupOpened: boolean) => void;
}

interface Area {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface PixelArea {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const ClientProfilePopup: React.FC<PopupProps> = ({
                                                             imgUrl,
                                                             setPopupOpened,
                                                         }) => {
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [cropSize, setCropSize] = useState({width: 383, height: 383});
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const width = window.innerWidth;

        if (width > 640) {
            setCropSize({width: 383, height: 383});
        } else {
            setCropSize({width: 250, height: 250});
        }
    }, []);

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: PixelArea) => {
        console.log(croppedArea, croppedAreaPixels);
    };

    const handleRotation = () => {
        setRotation(rotation + 90);
    };

    return (
        <div
            className="w-[100vw] h-[100vh] fixed top-0 left-0 z-10 flex justify-center items-center bg-[rgba(0,_0,_0,_0.42)] px-[20px]">
            <div
                className="w-full lg:w-[764px] 2xl:h-[717px] lg:h-[723px] sm:w-[620px] sm:h-[665px] h-[529px] rounded-[30px] bg-white sm:p-[24px_38px] p-[24px_13px]">
                <div className="flex justify-between items-center">
          <span className="text-[20px] sm:text-[30px] font-medium text-[#18470D]">
            Edit Photo
          </span>
                    <div className="cursor-pointer" onClick={() => setPopupOpened(false)}>
                        <CloseIcon/>
                    </div>
                </div>
                <div className="flex justify-center 2xl:mt-[34px] lg:mt-[72px] sm:mt-[38px] mt-[56px]">
                    <div className="sm:w-[383px] sm:h-[383px] w-[250px] h-[250px] relative">
                        <Cropper
                            image={imgUrl}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            rotation={rotation}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            cropShape="round"
                            cropSize={cropSize}
                            minZoom={1}
                            maxZoom={3}
                            showGrid={false}
                            style={{
                                containerStyle: {borderRadius: '50%'},
                            }}
                        />
                        <div
                            className="select-none gap-[7px] sm:gap-[10px] font-medium sm:w-[90px] sm:h-[32px] text-[#5A7D06] text-[10px] sm:text-[16px] w-[58px] h-[21px] absolute bottom-[16px] sm:bottom-[25px] left-[50%] -translate-x-[50%] bg-[#EEF6DBD9] rounded-[56px] flex justify-center items-center">
                            <MoveIcon/> <span>Move</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-[33px] font-medium text-[13px] sm:text-[20px] items-center">
                    <div className="w-[15px] h-[15px] sm:w-[24px] sm:h-[24px] text-[13px] sm:text-[20px]">
                        <LoupeZoomIcon/>
                    </div>
                    <span className="text-[#545454] ml-[9px]">Zoom</span>
                    <input
                        type="range"
                        min="1"
                        max="3"
                        step="0.1"
                        value={zoom}
                        onChange={(e) => setZoom(parseFloat(e.target.value))}
                        className="w-[80px] sm:w-[123px] ml-[7px] appearance-none cursor-pointer
             [&::-webkit-slider-runnable-track]:bg-[#EAEAEA]
             [&::-webkit-slider-runnable-track]:h-[3px]
             [&::-webkit-slider-thumb]:appearance-none
             sm:[&::-webkit-slider-thumb]:w-[17px]
             sm:[&::-webkit-slider-thumb]:h-[17px]
             [&::-webkit-slider-thumb]:w-[11px]
             [&::-webkit-slider-thumb]:h-[11px]
             [&::-webkit-slider-thumb]:bg-[#CBEC5E]
             [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:mt-[-6px]"
                    />
                    <div
                        onClick={() => handleRotation()}
                        className="cursor-pointer w-[15px] h-[15px] sm:w-[24px] sm:h-[24px] ml-[8px]"
                    >
                        <RotateIcon/>
                    </div>
                    <span className="text-[#18470D] ml-[9px]">Rotate</span>
                </div>

                <div className="flex justify-end 2xl:mt-[96px] lg:mt-[64px] sm:mt-[40px] mt-[43px]">
                    <button
                        onClick={() => setPopupOpened(false)}
                        className="cursor-pointer w-[150px] h-[42px] rounded-[49px] sm:w-[200px] sm:h-[48px] text-[#18470D] text-[16px] font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        className="cursor-pointer w-[150px] h-[42px] rounded-[49px] sm:w-[200px] sm:h-[48px] text-[#18470D] text-[16px] font-medium bg-[#CBEC5E]">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
