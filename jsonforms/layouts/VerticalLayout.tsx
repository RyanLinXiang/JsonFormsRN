import {
    RankedTester,
    rankWith,
    RendererProps,
    uiTypeIs,
    VerticalLayout,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import React, { FunctionComponent } from "react";
import { JsonFormsLayout } from "./JsonFormsLayout";
import { renderChildren } from "./util";

/**
 * Default tester for a vertical layout.
 * @type {RankedTester}
 */
export const verticalLayoutTester: RankedTester = rankWith(
    1,
    uiTypeIs("VerticalLayout"),
);

export const VerticalLayoutRenderer: FunctionComponent<RendererProps> = ({
    schema,
    uischema,
    path,
    visible,
    enabled,
}: RendererProps) => {
    const verticalLayout = uischema as VerticalLayout;

    return (
        <JsonFormsLayout
            uischema={uischema}
            schema={schema}
            visible={visible}
            enabled={enabled}
            path={path}
            orientation="vertical"
        >
            {renderChildren(verticalLayout, schema, path)}
        </JsonFormsLayout>
    );
};

export default withJsonFormsLayoutProps(VerticalLayoutRenderer);
