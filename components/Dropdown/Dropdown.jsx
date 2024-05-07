import { Menu,Transition } from '@headlessui/react'
import PropTypes from "prop-types"
import { twMerge } from 'tailwind-merge'
import { DropdownItem } from './DropdownItem'
import { Fragment } from 'react'
import {IoIosArrowDown} from "react-icons/io"

export const Dropdown = ({buttonText,items=[],className="",buttonClassName="",itemWrapperClassName,dropDownItemHeadingClassName="",dropDownItemParaClassName=""}) => {
    return (
    <Menu className={twMerge("relative",className)} as="ul">
      <Menu.Button className={twMerge("flex gap-1 items-center hover:text-primary-dark",buttonClassName)}>{buttonText}
          <IoIosArrowDown size={20}/>
      </Menu.Button>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-100"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-20"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-100"
        >
      <Menu.Items className={twMerge("bg-white flex flex-col gap-2 justify-center absolute mt-4 w-[300px] shadow-lg p-5 rounded-lg left-1/2 transform -translate-x-1/2 lg:w-[650px]",itemWrapperClassName)}>
        {
            items.map((item,index)=>{
                return (
                    <DropdownItem 
                      data={item} 
                      key={index} 
                      headingClassName={dropDownItemHeadingClassName}
                      paraClassName={dropDownItemParaClassName}
                    />
                )
            })
        }
      </Menu.Items>
      </Transition>
    </Menu>
  )
}
Dropdown.propTypes={
    buttonText:PropTypes.string.isRequired,
    items:PropTypes.array,
    className:PropTypes.string,
    itemWrapperClassName:PropTypes.string,
    buttonClassName:PropTypes.string,
    dropDownItemHeadingClassName:PropTypes.string,
    dropDownItemParaClassName:PropTypes.string
}