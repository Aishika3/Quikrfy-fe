import { Menu } from '@headlessui/react'
import PropTypes from "prop-types"
import { twMerge } from 'tailwind-merge'

export const DropdownItem = ({data,className,headingClassName,paraClassName}) => {
  return (
    <Menu.Item className={twMerge("px-4 py-2 rounded-lg transition ease-in-out duration-500 hover:bg-primary-light",className)} as="a" href={data.link}>
        <h2 className={twMerge('text-xl font-semibold',headingClassName)}>{data.title}</h2>
        <p className={twMerge('text-base',paraClassName)}>{data.description}</p>
    </Menu.Item>
  )
}

DropdownItem.propTypes={
    data:PropTypes.object,
    className:PropTypes.string,
    headingClassName:PropTypes.string,
    paraClassName:PropTypes.string
}