import { RendererProps } from "@jsonforms/core";
import React from "react";
import { ScrollView } from "react-native";
import { WithChildren } from "../index";

interface Props {
    orientation: "horizontal" | "vertical";
}

export const JsonFormsLayout = (
    props: RendererProps & WithChildren & Props,
) => {
    const flexDirection = props.orientation == "horizontal" ? "row" : "column";

    return (
        <ScrollView
            style={{
                flex: 1,
                flexDirection,
            }}
        >
            {props.children}
        </ScrollView>
    );
};
