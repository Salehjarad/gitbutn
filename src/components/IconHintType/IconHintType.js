import React from 'react';

const W = (props) => (
    <svg
      preserveAspectRatio="xMidYMid meet"
      height="1.3em"
      width="1.3em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      className={props.className}
      onClick={props.onClick}
      style={{ color: 'rgb(247, 125, 5)' }}
    >
      <g>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
      </g>
    </svg>
);

const H = (props) => (
    <svg
      preserveAspectRatio="xMidYMid meet"
      height="1.3em"
      width="1.3em"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke="none"
      className={props.className}
      onClick={props.onClick}
      style={{ color: 'rgb(56, 132, 255)' }}
    >
      <g>
        <path
          d="M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11"
          fillRule="evenodd"
        />
      </g>
    </svg>
);

const D = (props) => (
    <svg
      preserveAspectRatio="xMidYMid meet"
      height="1.3em"
      width="1.3em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={props.onClick}
      className={props.className}
      style={{ color: 'rgb(255, 70, 66)'}}
    >
      <g>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12" y2="17" />
      </g>
    </svg>
);

const S = (props) => (
    <svg
      preserveAspectRatio="xMidYMid meet"
      height="1.3em"
      width="1.3em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      className={props.className}
      onClick={props.onClick}
      style={{ color: 'rgb(38, 203, 124)' }}
    >
      <g>
        <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="23 3 12 14 9 11" />
      </g>
    </svg>
);

const IconForHint = props => {
  switch(props.type) {
    case 'warning':
      return <W {...props} />
    case 'danger':
      return <D {...props} />
    case 'success':
      return <S {...props} />
    case 'info':
      return <H {...props} />
    default:
      return <H {...props} />
  };
};

export default IconForHint;