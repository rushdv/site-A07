const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20 py-10 px-10">
      <div className="grid grid-cols-4 gap-10">

        <div>
          <h3 className="font-bold text-lg">CS — Ticket System</h3>
          <p className="text-sm opacity-80 mt-3">
            Lorem ipsum dummy text...
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <p>About Us</p>
          <p>Our Mission</p>
          <p>Contact</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Services</h4>
          <p>Products</p>
          <p>Customer Stories</p>
          <p>Apps</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Social Links</h4>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

      </div>

      <p className="text-center mt-10 text-sm opacity-70">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
