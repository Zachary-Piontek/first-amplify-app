/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddPetOverridesProps = {
    AddPet?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    "Add Pet"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider29766917?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36552705?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36552712?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766924?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36552719?: PrimitiveOverrideProps<TextFieldProps>;
    Divider29766925?: PrimitiveOverrideProps<DividerProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    Button36552727?: PrimitiveOverrideProps<ButtonProps>;
    Button29766926?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddPetProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddPetOverridesProps | undefined | null;
}>;
export default function AddPet(props: AddPetProps): React.ReactElement;
