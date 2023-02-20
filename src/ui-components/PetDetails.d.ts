/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetDetailsOverridesProps = {
    PetDetails?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Name:"?: PrimitiveOverrideProps<TextProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    "About:"?: PrimitiveOverrideProps<TextProps>;
    "Age:"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    "Color:"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PetDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
} & {
    overrides?: PetDetailsOverridesProps | undefined | null;
}>;
export default function PetDetails(props: PetDetailsProps): React.ReactElement;
