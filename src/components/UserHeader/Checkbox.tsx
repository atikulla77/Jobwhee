import {useState} from "react";
import {EmptyCheckboxIcon} from "../../../public/icons/EmptyCheckboxIcon";
import {FullCheckboxIcon} from "../../../public/icons/FullCheckBoxIcon";

type CheckboxProps = {
    isActive: boolean
}
export const CheckboxIcon = ({isActive}: CheckboxProps) => {
    return (
        <div

            className="">{isActive ? <FullCheckboxIcon/> : <EmptyCheckboxIcon/>}
        </div>)
};
