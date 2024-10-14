interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: 'red',
        height: '40px',
        padding: '20px',
        borderRadius: '4px',
        color: '#fff',
        borderColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '10px',
      }}
    >
      <p>{text}</p>
    </button>
  );
};
