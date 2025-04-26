import { useState } from 'react';

interface CheckBoxIconProps {
  checked: boolean;
  onToggle: () => void;
}

export const CheckBoxIcon: React.FC<CheckBoxIconProps> = ({ checked, onToggle }) => {

  return (
      <div onClick={onToggle} style={{ cursor: 'pointer', width: 24, height: 24 }}>
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <rect
              x="0.7"
              y="0.7"
              width="22.6"
              height="22.6"
              rx="3.3"
              fill={checked ? '#18470D' : '#FFFFFF'}
          />
          <rect
              x="0.7"
              y="0.7"
              width="22.6"
              height="22.6"
              rx="3.3"
              stroke="#18470D"
              strokeWidth="1.4"
          />
          {checked && (
              <path
                  d="M20 6L9 17L4 12"
                  stroke="#F0F1F4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
          )}
        </svg>
      </div>
  );
};
