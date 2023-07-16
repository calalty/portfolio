export const Arrow = ({
  additionalClassName,
}: {
  additionalClassName: string;
}) => {
  return (
    <svg
      className={additionalClassName}
      width="106"
      height="60"
      viewBox="0 0 136 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.791 49.777c-.154 4.195-.626 7.827.954 11.852C7.36 73.39 17.485 82.682 29.442 85.955c6.397 1.75 13.576 2.803 20.193 1.89C62.927 86.012 76.9 76.609 87.222 68.784c20.494-15.536 36.094-38.7 35.837-65.222-.256 2.407 2.277 5.37 3.358 7.347 3.17 5.796 5.405 12.093 8.129 18.101.294-2.43-1.167-8.517-1.441-9.82a58.697 58.697 0 0 0-4.824-15.298 6.762 6.762 0 0 1-1.419-2.863c-3.007-.098-5.698.975-8.074 3.217-7.107 4.072-13.72 9.399-19.817 14.854"
        stroke="#ef4444"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export default Arrow;
