const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center py-8 text-gray text-sm !mt-5">
      <p>© 2025 JennyP</p>
      <div className="flex gap-7">
        <button className="cursor-pointer hover:text-brand transition-default">Terms</button>
        <button className="cursor-pointer hover:text-brand transition-default">Privacy</button>
        <button className="cursor-pointer hover:text-brand transition-default">Support</button>
      </div>
    </div>
  );
};

export default Footer;
