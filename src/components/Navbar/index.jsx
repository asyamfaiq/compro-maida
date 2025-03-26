import Button from "../Button"

const Navbar = () => {
  return (
    <div className="w-full bg-primary text-white py-2 fixed shadow-xl z-999">
      <div className="flex justify-between items-center mx-10">
        <h1 className="font-bold text-xl">MAIDA FORTUNA</h1>
        <div className="flex gap-3">
            <p className="text-light-yellow">Home</p>
            <p>Experience</p>
            <p>Product</p>
            <p>Export & Domestic</p>
            <p>Founder</p>
            <p>Partners</p>
        </div>
        <Button label={"Contact Us"} className="bg-secondary text-white font-medium hover:bg-secondary/80"/>
      </div>
    </div>
  )
}

export default Navbar
