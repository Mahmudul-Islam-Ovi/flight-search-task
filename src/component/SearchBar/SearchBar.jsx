const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-center my-10">
        <div role="tablist" className="tabs tabs-boxed w-96">
          <a role="tab" className="tab">
            Round Trip
          </a>
          <a role="tab" className="tab tab-active">
            One Way
          </a>
          <a role="tab" className="tab">
            Multi City
          </a>
        </div>
      </div>
      <div className="border-blue-500 border container mx-auto my-2"></div>
      <div className="flex flex-wrap container mx-auto my-5 items-center justify-center gap-5">
        <input
          type="text"
          placeholder="LHR"
          className="input input-bordered w-32 max-w-xs"
        />
        <input
          type="text"
          placeholder="CSG"
          className="input input-bordered  w-32 max-w-xs"
        />
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered  w-40 max-w-xs"
        />
        <div className="flex  flex-wrap gap-5">
          <div>
            <select className="select select-bordered  w-28 max-w-xs">
              <option disabled selected>
                Day -
              </option>
              <option>Day {1}</option>
              <option>Day {2}</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered  w-28 max-w-xs">
              <option disabled selected>
                Day -
              </option>
              <option>Day {1}</option>
              <option>Day {2}</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered  w-44 max-w-xs">
              <option disabled selected>
                Any time
              </option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
        <div className="font-bold text-2xl">-</div>
        <div className="flex  flex-wrap gap-5">
          <div>
            <select className="select select-bordered  w-28 max-w-xs">
              <option disabled selected>
                ADT
              </option>
              <option>ADT {1}</option>
              <option>ADT {2}</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered  w-28 max-w-xs">
              <option disabled selected>
                1
              </option>
              <option> {2}</option>
              <option>{3}</option>
            </select>
          </div>
        </div>
        <div className="font-bold text-2xl">+</div>
      </div>
      <div className="border-blue-500 border container mx-auto "></div>
      <div className="flex flex-wrap items-center container my-5 mx-auto justify-center lg:justify-between">
        <div>
          <input type="checkbox" name="Option" id="" />
          <label htmlFor="Option" className="ml-2">
            Extra Options
          </label>
        </div>

        <div className="flex gap-2">
          <label htmlFor="Option" className="ml-2 font-bold">
            Environment
          </label>
          <div>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-xs"
            />
            <label htmlFor="Option" className="ml-2 font-bold">
              Dummy
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-xs"
            />
            <label htmlFor="Option" className="ml-2 font-bold">
              PDT
            </label>
          </div>
        </div>

        <button className="btn mt-1 btn-primary">Search</button>
      </div>
      <div className="border-blue-500 border container mx-auto my-5"></div>
    </div>
  );
};

export default SearchBar;
