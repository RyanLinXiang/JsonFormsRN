import {
    LabelElement,
    RankedTester,
    rankWith,
    RendererProps,
    uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import React, { FunctionComponent } from "react";
import { Text } from "react-native";

/**
 * Default tester for a label.
 * @type {RankedTester}
 */
export const labelRendererTester: RankedTester = rankWith(1, uiTypeIs("Label"));

/**
 * Default renderer for a label.
 */
export const LabelRenderer: FunctionComponent<RendererProps> = ({
    uischema,
}) => {
    const labelElement: LabelElement = uischema as LabelElement;

    return (
        <Text>
            {labelElement.text !== undefined &&
                labelElement.text !== null &&
                labelElement.text}
        </Text>
    );
};

export default withJsonFormsLayoutProps(LabelRenderer);
