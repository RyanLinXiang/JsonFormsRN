import {
    HorizontalLayout,
    RankedTester,
    rankWith,
    RendererProps,
    uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import React, { FunctionComponent } from "react";
import { JsonFormsLayout } from "./JsonFormsLayout";
import { renderChildren } from "./util";

/**
 * Default tester for a horizontal layout.
 * @type {RankedTester}
 */
export const horizontalLayoutTester: RankedTester = rankWith(
    1,
    uiTypeIs("HorizontalLayout"),
);

const HorizontalLayoutRenderer: FunctionComponent<RendererProps> = ({
    schema,
    uischema,
    enabled,
    visible,
    path,
}: RendererProps) => {
    const horizontalLayout = uischema as HorizontalLayout;

    return (
        <JsonFormsLayout
            visible={visible}
            enabled={enabled}
            path={path}
            uischema={uischema}
            schema={schema}
            orientation="horizontal"
        >
            {renderChildren(horizontalLayout, schema, path)}
        </JsonFormsLayout>
    );
};

export default withJsonFormsLayoutProps(HorizontalLayoutRenderer);
