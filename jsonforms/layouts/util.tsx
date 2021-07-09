import { JsonSchema, Layout } from "@jsonforms/core";
import { ResolvedJsonFormsDispatch, useJsonForms } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { View } from "react-native";

export interface RenderChildrenProps {
    layout: Layout;
    schema: JsonSchema;
    path: string;
}

export const renderChildren = (
    layout: Layout,
    schema: JsonSchema,
    path: string,
) => {
    if (isEmpty(layout.elements)) {
        return [];
    }

    const { renderers, cells } = useJsonForms();

    return layout.elements.map((child, index) => {
        return (
            <View key={`${path}-${index}`}>
                <ResolvedJsonFormsDispatch
                    renderers={renderers}
                    cells={cells}
                    uischema={child}
                    schema={schema}
                    path={path}
                />
            </View>
        );
    });
};
