interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

export const FbIcon = ({width = 28, height = 28}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_943_9831)">
                <path
                    d="M28 14C28 6.26719 21.7328 0 14 0C6.26719 0 0 6.26719 0 14C0 21.7328 6.26719 28 14 28C14.082 28 14.1641 28 14.2461 27.9945V17.1008H11.2383V13.5953H14.2461V11.0141C14.2461 8.02266 16.0727 6.39297 18.7414 6.39297C20.0211 6.39297 21.1203 6.48594 21.4375 6.52969V9.65781H19.6C18.1508 9.65781 17.8664 10.3469 17.8664 11.3586V13.5898H21.3391L20.8852 17.0953H17.8664V27.4586C23.718 25.7797 28 20.393 28 14Z"
                    fill="#2B2B2B"/>
            </g>
            <defs>
                <clipPath id="clip0_943_9831">
                    <rect width="28" height="28" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
};
  