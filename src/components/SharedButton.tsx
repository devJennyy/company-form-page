interface SharedButtonProps {
  fullWidth?: boolean;
}

const SharedButton = ({ fullWidth = false }: SharedButtonProps) => {
  return (
    <button
      className={`${fullWidth ? 'w-full' : 'w-1/2'} px-6 py-4 bg-brand border border-brand rounded-full text-white font-semibold hover:bg-transparent hover:border-brand hover:text-brand cursor-pointer transition-default`}
    >
      Download
    </button>
  );
};

export default SharedButton;
