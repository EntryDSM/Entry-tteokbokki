type PlusType = {
  size?: number;
  color?: string;
};

export const Plus = ({ size, color }: PlusType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7499 13.0384H13.0416V20.7467C13.0416 21.1556 12.8792 21.5477 12.59 21.8369C12.3009 22.126 11.9088 22.2884 11.4999 22.2884C11.091 22.2884 10.6989 22.126 10.4098 21.8369C10.1207 21.5477 9.95825 21.1556 9.95825 20.7467V13.0384H2.24992C1.84104 13.0384 1.44891 12.876 1.1598 12.5869C0.870677 12.2977 0.708252 11.9056 0.708252 11.4967C0.708252 11.0879 0.870677 10.6957 1.1598 10.4066C1.44891 10.1175 1.84104 9.95508 2.24992 9.95508H9.95825V2.24674C9.95825 1.83787 10.1207 1.44574 10.4098 1.15662C10.6989 0.867503 11.091 0.705078 11.4999 0.705078C11.9088 0.705078 12.3009 0.867503 12.59 1.15662C12.8792 1.44574 13.0416 1.83787 13.0416 2.24674V9.95508H20.7499C21.1588 9.95508 21.5509 10.1175 21.84 10.4066C22.1292 10.6957 22.2916 11.0879 22.2916 11.4967C22.2916 11.9056 22.1292 12.2977 21.84 12.5869C21.5509 12.876 21.1588 13.0384 20.7499 13.0384Z"
        fill={color}
      />
    </svg>
  );
};
