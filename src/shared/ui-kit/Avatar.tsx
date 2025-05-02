import React from 'react';
import Image, { StaticImageData } from 'next/image';

type AvatarProps = {
    src?: string | StaticImageData;
    alt?: string;
    size?: number;
    fallbackName?: string;
};

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    size = 64,
    fallbackName = '',
}) => {
    const initials = fallbackName
        ? fallbackName
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
        : '?';

    return (
        <div
            className="rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-gray-600 font-medium"
            style={{ width: size, height: size, fontSize: size * 0.35 }}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="object-cover w-full h-full"
                />
            ) : (
                initials
            )}
        </div>
    );
};

export default Avatar;
