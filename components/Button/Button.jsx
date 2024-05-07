import { twMerge } from "tailwind-merge"
import PropTypes from "prop-types"
import { forwardRef } from "react"
export const Button =forwardRef((props,ref) => {
  const {children,className,...rest}=props;
  return (
    <button ref={ref} className={twMerge("text-xl font-semibold bg-primary-dark text-white hover:bg-primary-normal px-8 rounded-full py-3",className)} {...rest}>
        {children}
    </button>
  )
})
Button.propTypes={
    children:PropTypes.node,
    className:PropTypes.string
}
Button.displayName="Button"