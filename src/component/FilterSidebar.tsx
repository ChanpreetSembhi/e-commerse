import { Disclosure, RadioGroup } from "@headlessui/react";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiSoundModuleLine,
} from "@remixicon/react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Options = {
    id: string;
  link: string;
  name: string;
};

const filterOptions: Options[] = [
  {
    id: "0",
    link: "#",
    name: "Tops",
  },
  {
    id: "1",
    link: "#",
    name: "Printed T-shirts",
  },
  {
    id: "2",
    link: "#",
    name: "Plain T-shirts",
  },
  {
    id: "3",
    link: "#",
    name: "Kurti",
  },
  {
    id: "4",
    link: "#",
    name: "Boxers",
  },
  {
    id: "5",
    link: "#",
    name: "Full sleeve T-shirts",
  },
  {
    id: "6",
    link: "#",
    name: "Joggers",
  },
  {
    id: "7",
    link: "#",
    name: "Payjamas",
  },
  {
    id: "8",
    link: "#",
    name: "Jeans",
  },
];

const dressStyleOptions: Options[] = [
  {
    id: "0",
    link: "#",
    name: "Classic",
  },
  {
    id: "1",
    link: "#",
    name: "Casual",
  },
  {
    id: "2",
    link: "#",
    name: "Bussiness",
  },
  {
    id: "3",
    link: "#",
    name: "Sport",
  },
  {
    id: "4",
    link: "#",
    name: "Elegant",
  },
  {
    id: "5",
    link: "#",
    name: "Formal (evening)",
  },
];

type Sizes = {
  id: string;
  name: string;
};

const sizes: Sizes[] = [
  {
    id: "0",
    name: "XXS",
  },
  {
    id: "1",
    name: "XL",
  },
  {
    id: "2",
    name: "XS",
  },
  {
    id: "3",
    name: "S",
  },
  {
    id: "4",
    name: "M",
  },
  {
    id: "5",
    name: "L",
  },
  {
    id: "6",
    name: "XXL",
  },
  {
    id: "7",
    name: "3XL",
  },
  {
    id: "8",
    name: "4XL",
  },
];

export default function Filter() {
  const [active, isActive] = useState(sizes);
  return (
    <section className="border-x border-b border-gray-200 divide-y divide-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <h5 className="text-lg">Filters</h5>
        <RiSoundModuleLine className="size-5 text-gray-600" />
      </div>
      <div className="flex flex-col space-y-4 *:flex *:items-center *:justify-between *:text-sm *:text-gray-500 *:font-medium p-6">
        {filterOptions.map((options) => (
          <Link to={options.link} key={options.id}>
            {options.name}
            <RiArrowRightSLine className="text-gray-500 size-5" />
          </Link>
        ))}
      </div>
      <Disclosure>
        {({open}) => (
            <>
            <Disclosure.Button className="flex items-center justify-between px-6 py-4 w-full">
              <h5 className="text-lg">Price</h5>
              <RiArrowDownSLine
                className={`${
                  open ? "rotate-180 transform" : ""
                } size-5 text-gray-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-6">
                
            </Disclosure.Panel>
            </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between px-6 py-4 w-full">
              <h5 className="text-lg">Size</h5>
              <RiArrowDownSLine
                className={`${
                  open ? "rotate-180 transform" : ""
                } size-5 text-gray-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-6">
              <RadioGroup value={active} onChange={isActive}>
                <div className="grid grid-cols-3 gap-4">
                  {sizes.map((size) => (
                    <RadioGroup.Option
                      key={size.id}
                      value={size}
                      className={({ checked }) =>
                        `${
                          checked
                            ? "bg-indigo-500 text-gray-50 border-indigo-500"
                            : "border-gray-200"
                        } border text-sm rounded-lg transition-all duration-200 text-center cursor-pointer px-4 py-2`
                      }
                    >
                      {size.name}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between px-6 py-4 w-full">
              <h5 className="text-lg">Dress Style</h5>
              <RiArrowDownSLine
                className={`${
                  open ? "rotate-180 transform" : ""
                } size-5 text-gray-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col space-y-4 *:flex *:items-center *:justify-between *:text-sm *:text-gray-500 *:font-medium p-6">
              {dressStyleOptions.map((options) => (
                <Link to={options.link} key={options.id}>
                  {options.name}{" "}
                  <RiArrowRightSLine className="text-gray-500 size-5" />
                </Link>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  );
}
