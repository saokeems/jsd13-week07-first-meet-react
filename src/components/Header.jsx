const Header = () => {
  return (
    <div className="flex justify-between p-4">

      <div className="bg-blue-400 p-1 rounded-md">
        Logo
      </div>

      <div className="max-sm:hidden">
        <ul className="flex gap-4">
          <li className=" bg-amber-100 p-1 rounded-md"><a href="#">Home</a></li>
          <li className=" bg-amber-100 p-1 rounded-md"><a href="#">About</a></li>
          <li className=" bg-amber-100 p-1 rounded-md"><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="bg-green-200 p-1 rounded-md">
        Profile
      </div>

    </div>
  )
}
export default Header