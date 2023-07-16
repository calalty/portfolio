export const Menu = ({
  additionalClassName,
}: {
  additionalClassName: string;
}) => {
  return (
    <svg
      className={additionalClassName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
      fill="none"
    >
      <title>Menu</title>
      <circle
        cx="12"
        cy="12"
        r="3"
        opacity="1"
        transform-origin="0px 0px"
      ></circle>
      <circle
        cx="24"
        cy="12"
        r="3"
        opacity="1"
        transform-origin="0px 0px"
      ></circle>
      <circle
        cx="36"
        cy="12"
        r="3"
        opacity="1"
        transform-origin="0px 0px"
      ></circle>
      <circle
        cx="36"
        cy="24"
        r="3"
        opacity="1"
        transform-origin="0px 0px"
      ></circle>
      <circle
        cx="36"
        cy="36"
        r="3"
        opacity="1"
        transform-origin="0px 0px"
      ></circle>
      <circle
        cx="24"
        cy="36"
        r="3"
        opacity="1"
        transform-origin="0px 0px"
      ></circle>
      <circle
        cx="12"
        cy="36"
        r="3"
        opacity="1"
        transform-origin="0px 0px"
      ></circle>
      <circle
        cx="12"
        cy="24"
        r="3"
        opacity="1"
        transform-origin="0px 0px"
      ></circle>
      <rect
        x="21"
        y="21"
        width="6px"
        height="6px"
        rx="3"
        ry="3"
        opacity="0.75"
        transform-origin="0px 0px"
      ></rect>
      <rect
        x="21"
        y="21"
        width="6px"
        height="6px"
        rx="3"
        ry="3"
        opacity="0.75"
        transform-origin="0px 0px"
      ></rect>
    </svg>
  );
};

export default Blob;