export const Menu = ({ transform }: { transform: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
      fill="transparent"
      stroke="#606887"
      style={{ rotate: transform ? "45deg" : "0deg", transition: "0.5s" }}
    >
      <title>Menu</title>
      <circle
        cx="12"
        cy="12"
        r="3"
        opacity={transform ? "0" : "1"}
        transform-origin="0px 0px"
        style={{
          transition: "0.5s",
          transform: transform ? "translateX(-24px) translateY(-24px)" : "none",
        }}
      ></circle>
      <circle
        cx="24"
        cy="12"
        r="3"
        opacity={transform ? "0" : "1"}
        transform-origin="0px 0px"
        style={{
          transition: "0.5s",
          transform: transform ? "translateX(0px) translateY(-24px)" : "none",
        }}
      ></circle>
      <circle
        cx="36"
        cy="12"
        r="3"
        opacity={transform ? "0" : "1"}
        transform-origin="0px 0px"
        style={{
          transition: "0.5s",
          transform: transform ? "translateX(24px) translateY(-24px)" : "none",
        }}
      ></circle>
      <circle
        cx="36"
        cy="24"
        r="3"
        opacity={transform ? "0" : "1"}
        transform-origin="0px 0px"
        style={{
          transition: "0.5s",
          transform: transform ? "translateX(24px) translateY(0)" : "none",
        }}
      ></circle>
      <circle
        cx="36"
        cy="36"
        r="3"
        opacity={transform ? "0" : "1"}
        transform-origin="0px 0px"
        style={{
          transition: "0.5s",
          transform: transform ? "translateX(24px) translateY(24px)" : "none",
        }}
      ></circle>
      <circle
        cx="24"
        cy="36"
        r="3"
        opacity={transform ? "0" : "1"}
        transform-origin="0px 0px"
        style={{
          transition: "0.5s",
          transform: transform ? "translateX(0px) translateY(24px)" : "none",
        }}
      ></circle>
      <circle
        cx="12"
        cy="36"
        r="3"
        opacity={transform ? "0" : "1"}
        transform-origin="0px 0px"
        style={{
          transition: "0.5s",
          transform: transform ? "translateX(-24px) translateY(24px)" : "none",
        }}
      ></circle>
      <circle
        cx="12"
        cy="24"
        r="3"
        opacity={transform ? "0" : "1"}
        transform-origin="0px 0px"
        style={{
          transition: "0.5s",
          transform: transform ? "translateX(-24px) translateY(0)" : "none",
        }}
      ></circle>
      <rect
        x="21"
        y="21"
        width={transform ? "39.94px" : "6px"}
        height="6px"
        rx="3"
        ry="3"
        opacity={transform ? "1" : "0.75"}
        transform-origin="0px 0px"
        style={{
          transform: transform
            ? "translateX(-16.97px) translateY(0px)"
            : "none",
          transition: "0.5s",
        }}
      ></rect>
      <rect
        x="21"
        y="21"
        width="6px"
        height={transform ? "39.94px" : "6px"}
        rx="3"
        ry="3"
        opacity={transform ? "1" : "0.75"}
        transform-origin="0px 0px"
        style={{
          transform: transform
            ? "translateX(0px) translateY(-16.97px)"
            : "none",
          transition: "0.5s",
        }}
      ></rect>
    </svg>
  );
};
